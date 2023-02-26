import { IoLogoWhatsapp } from 'react-icons/io';
import { IoDownloadOutline } from 'react-icons/io5';
import { BiMailSend } from 'react-icons/bi';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai';
import {
  github,
  instagram,
  linkedIn,
  whatsApp,
  mailLink,
  curriculum
} from '../../constants';

export const formContacts = [
  {
    icon: <IoLogoWhatsapp />,
    label: 'WhatsApp',
    link: whatsApp
  },
  {
    icon: <BiMailSend />,
    label: 'Email',
    link: mailLink
  },
  {
    icon: <IoDownloadOutline />,
    label: 'Currículo',
    link: curriculum
  },
  {
    icon: <AiOutlineGithub />,
    label: 'GitHub',
    link: github
  },
  {
    icon: <AiFillLinkedin />,
    label: 'LinkedIn',
    link: linkedIn
  },
  {
    icon: <AiFillInstagram />,
    label: 'Instagram',
    link: instagram
  }
];
