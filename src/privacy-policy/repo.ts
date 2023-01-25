export type PrivacyPolicyDto = {
  version: number;
  dateEffective: string;
}

export class PrivacyPolicyRepo {
  async getPolicyDetails(): Promise<PrivacyPolicyDto> {
    const payload = await fetch("https://api.drynk.syzible.com/v1/privacy/version")
    const data = await payload.json()

    return {
      version: data.version ?? 1,
      dateEffective: data.dateEffective ?? "2020-01-01"
    }
  }
}