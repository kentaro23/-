export type OptionFeatureIconKey = "map-pin" | "mail" | "phone";

export type ServiceOption = {
  id: string;
  name: string;
  price: string;
  shortLabel: string;
  features: {
    icon: OptionFeatureIconKey;
    text: string;
  }[];
  notes: string[];
};

export const officeSetupOption: ServiceOption = {
  id: "office-setup-option",
  name: "事務局設置オプション",
  price: "月額 30,000円〜",
  shortLabel: "事務局設置（住所・専用メール・電話）オプション対応",
  features: [
    {
      icon: "map-pin",
      text: "事務所設置（事務局住所としての利用、郵送物受領拠点）"
    },
    {
      icon: "mail",
      text: "専用メールアドレス設置（学会専用窓口）"
    },
    {
      icon: "phone",
      text: "共有電話利用（代表番号で一次受付・取り次ぎ）"
    }
  ],
  notes: [
    "対応範囲・郵送物量・電話受付時間帯により個別調整",
    "学会の法人形態/登記利用の可否は個別相談"
  ]
};

export const optionCards: ServiceOption[] = [officeSetupOption];
