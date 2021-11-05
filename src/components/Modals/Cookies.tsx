import React, { FC } from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from "@mui/material";

export const Cookies: FC<CookiesProps> = ({
}: CookiesProps) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Box>
      <Button variant="text" onClick={handleClickOpen('paper')} sx={{ color: '#fff', fontFamily: 'var(--type-first)', textTransform: 'none' }}>Cookies</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Cookies Policy
          </Typography>
          <Typography sx={{ paddingY: '1rem' }}>Last updated: November 05, 2021</Typography>
          <Typography>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</Typography>
          <Typography>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</Typography>
          <Typography>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</Typography>
          <Typography variant="h5" sx={{ paddingTop: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Interpretation and Definitions</Typography>
          <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Interpretation</Typography>
          <Typography>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Typography>
          <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Definitions</Typography>
          <Typography>For the purposes of this Cookies Policy:</Typography>
          <Box sx={{ paddingY: '1rem' }}>
            <Typography sx={{ paddingBottom: '.3rem' }}><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to Kampanos Portugal, Unipessoal Lda, Rua do Centro Cultural nº 7, sala 2.2, 1700-106 - Lisboa.</Typography>
            <Typography sx={{ paddingBottom: '.3rem' }}><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</Typography>
            <Typography sx={{ paddingBottom: '.3rem' }}><strong>Website</strong> refers to Kampanos, accessible from <a href="https://kampanos.pt" rel="external nofollow noopener" target="_blank">https://kampanos.pt</a></Typography>
            <Typography sx={{ paddingBottom: '.3rem' }}><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</Typography>
          </Box>
          <Typography variant="h5" sx={{ paddingTop: '1rem', fontWeight: 'bold', textAlign: 'center' }}>The use of the Cookies</Typography>
          <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Type of Cookies We Use</Typography>
          <Typography>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</Typography>
          <Typography>We use both session and persistent Cookies for the purposes set out below:</Typography>
          <Box sx={{ paddingY: '1rem' }}>
          <Typography sx={{ paddingY: '.3rem' }}><strong>Necessary / Essential Cookies</strong></Typography>
            <Typography>Type: Session Cookies</Typography>
            <Typography>Administered by: Us</Typography>
            <Typography>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</Typography>
            <Typography sx={{ paddingTop: '1rem', paddingBottom:'0.3rem' }}><strong>Functionality Cookies</strong></Typography>
            <Typography>Type: Persistent Cookies</Typography>
            <Typography>Administered by: Us</Typography>
            <Typography>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</Typography>
          </Box>
          <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Your Choices Regarding Cookies</Typography>
          <Typography>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</Typography>
          <Typography>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</Typography>
          <Typography>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</Typography>
          <Box sx={{ paddingY: '1rem' }}>
            <Typography>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">https://support.google.com/accounts/answer/32050</a></Typography>
            <Typography>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank">http://support.microsoft.com/kb/278835</a></Typography>
            <Typography>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></Typography>
            <Typography>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></Typography>
            <Typography>For any other web browser, please visit your web browser's official web pages.</Typography>
          </Box>
          <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>More Information about Cookies</Typography>
          <Typography>You can learn more about cookies: <a href="https://www.privacypolicies.com/blog/cookies/" target="_blank">What Are Cookies?</a>.</Typography>
          <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Contact Us</Typography>
          <Typography>If you have any questions about this Cookies Policy, You can contact us by email: <strong><a href="mailto:service@kampanos.pt" target="_blank" rel="external nofollow noopener">service@kampanos.pt</a></strong></Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Reject</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export type CookiesProps = {
};
