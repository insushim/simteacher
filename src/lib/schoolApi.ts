// NEIS 학교 급식 API 연동

interface MealInfo {
  date: string;
  lunch: string[];
  calorie: string;
}

interface SchoolInfo {
  schoolCode: string;
  officeCode: string;
}

// NEIS API로 급식 정보 가져오기
export async function fetchSchoolMeals(
  schoolInfo: SchoolInfo,
  startDate: string,
  endDate: string
): Promise<MealInfo[]> {
  const apiKey = process.env.NEXT_PUBLIC_NEIS_API_KEY;

  if (!apiKey) {
    console.warn('NEIS API key not configured');
    return [];
  }

  try {
    const url = new URL('https://open.neis.go.kr/hub/mealServiceDietInfo');
    url.searchParams.append('KEY', apiKey);
    url.searchParams.append('Type', 'json');
    url.searchParams.append('ATPT_OFCDC_SC_CODE', schoolInfo.officeCode);
    url.searchParams.append('SD_SCHUL_CODE', schoolInfo.schoolCode);
    url.searchParams.append('MLSV_FROM_YMD', startDate);
    url.searchParams.append('MLSV_TO_YMD', endDate);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.mealServiceDietInfo) {
      const rows = data.mealServiceDietInfo[1].row;
      return rows.map((row: { MLSV_YMD: string; DDISH_NM: string; CAL_INFO: string }) => ({
        date: row.MLSV_YMD,
        lunch: row.DDISH_NM
          .split('<br/>')
          .map((item: string) => item.replace(/[0-9.]/g, '').trim())
          .filter((item: string) => item),
        calorie: row.CAL_INFO,
      }));
    }

    return [];
  } catch (error) {
    console.error('Failed to fetch school meals:', error);
    return [];
  }
}

// NEIS API로 학교 정보 검색
export async function searchSchool(schoolName: string): Promise<SchoolInfo | null> {
  const apiKey = process.env.NEXT_PUBLIC_NEIS_API_KEY;

  if (!apiKey) {
    console.warn('NEIS API key not configured');
    return null;
  }

  try {
    const url = new URL('https://open.neis.go.kr/hub/schoolInfo');
    url.searchParams.append('KEY', apiKey);
    url.searchParams.append('Type', 'json');
    url.searchParams.append('SCHUL_NM', schoolName);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.schoolInfo) {
      const school = data.schoolInfo[1].row[0];
      return {
        schoolCode: school.SD_SCHUL_CODE,
        officeCode: school.ATPT_OFCDC_SC_CODE,
      };
    }

    return null;
  } catch (error) {
    console.error('Failed to search school:', error);
    return null;
  }
}

// 날짜 포맷팅 (YYYYMMDD)
export function formatDateForNeis(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

// 이번 주 월요일~금요일 날짜 계산
export function getWeekDates(date: Date = new Date()): { start: string; end: string } {
  const curr = new Date(date);
  const first = curr.getDate() - curr.getDay() + 1; // Monday
  const last = first + 4; // Friday

  const monday = new Date(curr.setDate(first));
  const friday = new Date(curr.setDate(last));

  return {
    start: formatDateForNeis(monday),
    end: formatDateForNeis(friday),
  };
}
