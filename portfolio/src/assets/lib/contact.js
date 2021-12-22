import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';

const contactProperties = [
    {
        icon: <AccountBoxIcon fontSize="large" className="color-crimpson" />,
        name: "Name",
        value: "Shivani Sehgal",
    },
    {
        icon: <EmailIcon fontSize="large" className="color-crimpson" />,
        name: "Email",
        value: "sehgalshivani07@gmail.com",
        onClick: () => { window.open('mailto:sehgalshivani07@gmail.com', "_self"); }
    },
    {
        icon: <LinkedInIcon fontSize="large" className="color-crimpson" />,
        name: "LinkedIn",
        value: "https://www.linkedin.com/in/shivani-sehgal-b6a03616b",
        onClick: () => { window.open('https://www.linkedin.com/in/shivani-sehgal-b6a03616b/'); }
    },
];

const formInputs = [
    {
        className: "width-48-pt",
        id: "outlined-basic",
        color: "error",
        label: "Name",
        variant: "outlined",
        size: "small",
        autoComplete: "off",
        margin: "dense",
        required: true,
        InputProps: {
            endAdornment: (
                <InputAdornment position="end">
                    <AccountCircle />
                </InputAdornment>
            ),
        }
    },
    {
        className: "width-49-pt",
        id: "outlined-basic",
        color: "error",
        label: "Email",
        variant: "outlined",
        size: "small",
        autoComplete: "off",
        type: "email",
        margin: "dense",
        required: true,
        InputProps: {
            endAdornment: (
                <InputAdornment position="end">
                    <EmailRoundedIcon />
                </InputAdornment>
            ),
        }
    },
    {
        id: "outlined-basic",
        color: "error",
        label: "Subject",
        variant: "outlined",
        size: "small",
        autoComplete: "off",
        fullWidth: true,
        margin: "dense",
        required: true,
        InputProps: {
            endAdornment: (
                <InputAdornment position="end">
                    <SubjectRoundedIcon />
                </InputAdornment>
            ),
        }
    },
    {
        id: "outlined-basic",
        color: "error",
        label: "Message",
        variant: "outlined",
        size: "small",
        autoComplete: "off",
        multiline: true,
        margin: "dense",
        rows: 3,
        fullWidth: true,
        required: true,
        InputProps: {
            endAdornment: (
                <InputAdornment position="end">
                    <MessageRoundedIcon />
                </InputAdornment>
            )
        }
    },
]

export default contactProperties;
export {
    formInputs,
};
