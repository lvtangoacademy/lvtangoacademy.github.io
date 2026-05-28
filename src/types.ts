export type Tab = 'classes' | 'instructors' | 'schedule' | 'contact';

export interface Instructor {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  specialties: string[];
  philosophy: string;
  bio: string;
}

export interface ClassItem {
  id: string;
  title: string;
  time: string;
  day: string;
  level: 'beginner' | 'intermediate' | 'master' | 'all';
  category: string;
  instructor: string;
  description: string;
  intensity: number; // 1-5 scale
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const IMAGES = {
  // Valentin Russo
  instructorValentin: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCksmjIzQh02aLI_GwWeopqmNM3z2uLABGivH9Rov0bz6Eh6G8GbfqheD6uZ8uKdhKiuzTGyGffPlkLfcoqw4wqmDmJ1c1CE2s3WLoJbeswFJVsejFn9sT8aLzERQpNTijAtxoI-4-duwq9mFLQogfEUNihIn7_bM2mfcRA5r8-85HDARfymlvYoIeWQaUlwMPvKHFMZ2mRHyxYXEaeHJi9RA_9mOLipgPL4IoUZ1j0sEM1Ns4ZXeSXANg3WJcKVfMmUmbqa_5Ly6VZ',
  // Elena Moretti
  instructorElena: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpxacYeFBMFq0a94eqDvZPaOjrQtX2Oze3eLC8ajkiSuHZ-mMrvf1F7mjP10I5ZSYbBRLwhxhv4qY6MOgbbX2neQmHwdBOUH4LkdFbaljbCiDFO1S7TQTg0OVVQI7qFG6YhsQ2CCbc2K-Nax-HhLVncnlAR4Oe4pBKrY8zSrnkGA9ApwnvaSwyjg-_Tfn0QV0oB8VCCy4TVC7q2k9S4n-NG_R0PiH9oMxzQ75Irkfn306TJc7m0y2cOhk7hcIXbGDZoA1rKMjOB6Z4',
  // Julian & Sofia
  instructorsJulianSofia: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaWBEc0EBrWSy_hPtL4FccdBNd0JeGZ65FACb7FV2eqrH3Az7IY5lkI_pP-Tg5848UOV8CcDpYvMdjxzi314qdr6vPY0iNGdqo2_RXdwteAK5HGMVtCDzXHqfQ7HFywH0VE6w7dM1xlovkP4oIbbiLEkAI25ETy3vJ0k4OJUimUI5mI99wmFlpsNaUU5sPlTfTdtSrteiT0uerOdmLg1-o9ZiqzKFtxsPj1zHvEx_ibJrpE9fNHPIsV4bRC0oW_-TcU5m6HZ6OvzD8',
  // Contact Hero Legs
  contactDancers: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqUNvQh0jcFYuUmVLmolnMP2MRi9g6AcsWWTg5YUQO9JxJ2dW2se6FDUHBL3RIhwpH1QdJUvJpe7QNqP6BExNhukjVCGrL5d31PNHXNjVTeD-dHZm5kPHPo2JV0HzaOvA0m2nZb-ZDjTSsf-fziTWZDZ35vm3diAbRjbfIpHZ3zznAYXU-fCkK5FJLWpLaYy6l0fZfPQIzMEQlOlR6W69yfok-6fWJQf3hjK6IISVmW9WaOpS5n9l1jePMHPUamn91m80SoJksNVEp',
  // Stylized map
  locationMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl1547FgPCcSKcRvXRMPYqCUI6Z_MTTahSVg4q4jpa_PnOrwoFWPq1bMF1yCteB8i9AqlydZSyLjsAGaZq5su2CbbBJ0lh4E2cSdtDfnEblwkkCO48WGll_9KwpYe_MGpzslvgH-c1aD4Ydh_fPpBuuXldnLb0JfdgVxzGaACar3iw_x-GOOAbkvnWK_wTsScpW7jS96fiUfggoDAuCJESs8yIDgu9aFjRVYuuIffuZJsXZ1b9WtAXyCs9UJxmhLK_p7TdJIy6NMCL',
  // Classes Hero background silhouette
  heroSilhouette: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABqzv8yZU8bU5DtJQ6N0UFGo7KJXUYEq9_RGAHqHT8Z7f7XazQ7yH0_zSsC4CQsM_4DRWOFqxXsUYc0gZpezAi_btWnHVEuUH9X_7uQjQNya4Vb_saXYrHmMZFtrFvmZyZX3UCJF-lPn84asLvHzAVBf180o0xkZWnCyNYOIZcS62iU9pHPdVfOLuwIBR9krTpThZ3cM43Us7LqjFjTpm4UYq8RisBmHv32UNstCSOYpKtH7_pt6zenhkbLW56VHCVb4Eroc8k8CVL',
  // Close up feet
  feetCloseUp: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK_qnlRElkJu4WoWde271cLuSXTv-AmyukH5z-0bZxY1vYO4fNLmaiCNbTvFCKOwDqXV-Nlh0BHKUg498rwa75l2t_du28EmhxCyJEQgKf_3IbxwzThqrCJwvTODztwkVrlOg65BcskLVDIjicw5zphnbZfOcfrY_oH4dYu0uHbfXj-kvdcnZmYa5Skm4C9oEI6GA7G9ZjS-RYLZ3OJRZcjpoQUvECLKX7TKrStYGjtVCCXzr6-qmU9SRcSoOcv-Idwg7LCT7sfrs5',
  // Vintage camera
  vintageCamera: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyhBC9UTQ3NWaPP2ZeCDHxEhEh0svc-Mgf_oTv5F_p4xzcltYMLD2uwsohg3fnfWDvwISPKLuRvo18zKznixfaxq04zpVn1LUhFISFdu2UMgFfM38xC0-Yh1zkpZWPap2uSVw__U3sfgseQg6Nd61KkNY_19SADu0KYW_pRit0nyedwZQ6nn-G16E12qxYmQ2fILWCidtXjakc34ag3Mr9vGslai9J2Fqo_ZBxVHNYpYnxeBWHv7ZeTzWIKJmE7nKVFq5HcP_Z1Lb',
  // Class beginner
  classBeginner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlXBiTl3ubzPUIZGtak_6HkN5r48NmWAvYrnaLITBiHPGWaSIk_uq6yceuUWbZBAauiMEhK426LxcJ0VySaiJ_afszrgNmj2nbeg1Wg2FiRhU1QxIbEWPRdnlwV8Y-LKo3XmOkdMV4ZtrmaR5HHQBD0haTDPfaSj9TdDQ43Wr1EgzhRj3d45tLNpULo3NwDJwpn5gyGTm0KJZmToXlRE-LqTw5_PlG9LeixKdVCEXD11ckO3Xyb8i5M65dYnRSflIm73w1OVaEAtGD',
  // Class intrepid (intermediate)
  classIntrepid: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG0CWqNy9TNun5nPgM5fEEdL313DYNc8z-jUZqJ_HIHLW_VQiIs-eXsAUETyednJ-anWtK_SqN9CNfZsIurOszHOVWN1ZF3IUpfVYF84Nc1qGVqWzD9abYLbddJdhy8_Zb7AERaTfhsGzdUHrUw4fRQBRETyAliyhM7Q908ISczsuKNGrnZgCsDvPAAj6pIvuGc-8f-im7Zx3CR2uEfmL7ofTdxcnNvOCaSX71iGEkTRfHeihu6LZmrsBtnW4t4UNp_mulgFLcqRlZ',
  // Class master
  classMaster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdaLDhnQVsDNbWX5EcWTWyUSv2-AW3RXnqgH860l-E100cKSguM2t-7LPLqIPr04KuW0YPs0tB0Fez-dgcf97q1rUnt8xV4BBXoGU7aW41u7A54mZkPXLlcpJN-amplgdxrA_QMlIDaCvP3SZ5pMH0-u-5XJP7NYZRvuAq_guADTlBofJsjBPRlDJOh_es_JAJYgEZ46k1vmBsl-ftoNCv4BWbeB_hUjg8RnhKfbQIlxi_dE0VkER2rlWDS0bj9aKxkCA_cXUPgtMZ',
  // Testimonial author portrait
  testimonialAuthor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmP3h7CCXWCmZFHQhdVpKXXlZ1gp9ZRYgYWPoSRVxtHUwOerHVh88eDRDi4YCnXRDSdmVH_FfttRUINxfrFY6hrW8pIAdm3i49jbbkLZJDo6mOl4SfzuXw9PK8ihGms9L2xsT8YSYKEEKbLx0ly_-5AVJUnqZ4LtAm4T0iozt1rHZu5m3LTYnZnAztgDlk2BISs4OwtVzPPMBXsTbKfKNtLecC9oQcEcCFWaaOdMtZ-ugSFu0R3bJaSVkthsvf5SMfiycLKQ9qM8Qq'
};
