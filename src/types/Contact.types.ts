export type Link = {
  link_type: string;
  name: string;
  kind: string;
  url: string;
  size: string | number;
};

export type Contacts = {
  link: Link;
  label_contact: string;
};

export interface Contact {
  title: string;
  subtitle: string;
  contacts: Contacts[];
}

export interface Props {
  contact: Contact;
}
