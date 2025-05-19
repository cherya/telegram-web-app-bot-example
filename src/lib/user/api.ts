export async function CheckInitData(initData: string) {
  const response = await fetch(`/api/validate?${initData}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });

  if (!response.ok) {
    const respData = await response.json();
    throw new Error(`Validation failed: ${respData.message}`)
  }

  const respData = await response.json();
  return respData;
}
