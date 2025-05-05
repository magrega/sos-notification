export interface OssLegalData {
    results: {
      library: string;
      version: string;
      license: string;
      link: string;
      text: string;
    }[];
  }

export interface OssLegalItem {
  library: string;
  version: string;
  license: string;
  link: string;
  text: string;
}
  
export interface TermsOrPrivacyLegalData {
  text: string;
}

export type LegalData = OssLegalData | TermsOrPrivacyLegalData;