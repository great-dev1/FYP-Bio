export interface ILink {
  title: string;
  url: string;
}
export interface SelectOptionProps {
  data: string;
  label: string;
}
export interface AuthFormType {
  email: string;
  password: string;
}
export interface ITemplate {
  title: string;
  type: string;
  backgroundImage?: StaticImageData;
  coverImg?: StaticImageData;
  backgroundVideo?: string;
}
export interface IVideoContent {
  id: number;
  title: string;
  description: string;
}

export interface IPersonalContent {
  id: number;
  questionType: string;
  answerType: string;
}

export interface IExcludeDay {
  id: number;
  date: Date | null;
}
