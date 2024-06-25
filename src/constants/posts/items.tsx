import { ArrowDownTrayIcon, ArrowUpRightIcon, BookmarkIcon, NoSymbolIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ArrowUpTrayIcon, ChatBubbleOvalLeftIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline'

export const OptionPopupCardItems = [
    {
        name: "Save",
        url: "",
        icon: <BookmarkIcon />,
        caption: ""
    },
    {
        name: "Open in app",
        url: "#",
        icon: <ArrowUpRightIcon />,
        caption: ""
    },
    {
        name: "Download Image",
        url: "#",
        icon: <ArrowDownTrayIcon />,
        caption: ""
    },
    {
        name: "Hide",
        url: "#",
        icon: <XMarkIcon />,
        caption: "See fewer pins like this"
    },
    {
        name: "Report",
        url: "#",
        icon: <NoSymbolIcon />,
        caption: "This goes against the community guidelines"
    }
]

export const OptionPopupShareItems = [
    {
        name: "WhatsApp",
        url: "",
        icon: "whatsapp.svg",
        type: "svg"
    },
    {
        name: "Telegram",
        url: "",
        icon: "telegram.svg",
        type: "svg"
    },
    {
        name: "Message",
        url: "",
        icon: <ChatBubbleOvalLeftIcon />,
        type: "icon"
    },
    {
        name: "Line",
        url: "",
        icon: "line.svg",
        type: "svg"
    },
    {
        name: "Email",
        url: "",
        icon: <EnvelopeIcon />,
        type: "icon"
    },
    {
        name: "Facebook",
        url: "",
        icon: "facebook.svg",
        type: "svg"
    },
    {
        name: "Copy link",
        url: "",
        icon: <LinkIcon />,
        type: "icon"
    },
    {
        name: "Share via",
        url: "",
        icon: <ArrowUpTrayIcon />,
        type: "icon"
    }
]