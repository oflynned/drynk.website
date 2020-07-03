export class PrivacyPolicyRepo {
  async getPolicyDetails(): Promise<{ version: number, dateEffective: string }> {
    const payload = await fetch("https://drynk-api.syzible.com/privacy/version")
    const data = await payload.json()

    return {
      version: data.version || 1,
      dateEffective: data.dateEffective || "2020-01-01"
    }
  }
}