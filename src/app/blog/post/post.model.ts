export interface BasePost {
  // type: 'quote' | 'photo' | 'link' | 'conversation' | 'audio' | 'regular';
  date: Date;
  url: string;
  'url-with-slug': string;
}

interface QuotePost extends BasePost {
  type: 'quote';
  'quote-text': string;
  'quote-source': string;
}

interface PhotoPost extends BasePost {
  type: 'photo';
  'photo-caption': string;
  'photo-url-1280': string;
  'photo-url-500': string;
  'photo-url-400': string;
  'photo-url-250': string;
  'photo-url-100': string;
  'photo-url-75': string;
}

interface LinkPost extends BasePost {
  type: 'link';
  'link-text': string;
  'link-description': string;
  'link-url': string;
}

interface RegularPost extends BasePost {
  type: 'regular';
  'regular-body': string;
  'regular-title': string;
}

interface ConversationPost extends BasePost {
  type: 'conversation';
  'conversation-title': string | null;
  'conversation-text': string;
}

export type Post =
  | QuotePost
  | PhotoPost
  | LinkPost
  | RegularPost
  | ConversationPost;
