import React, { FC } from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from "@mui/material";

export const Impressum: FC<ImpressumProps> = ({
}: ImpressumProps) => {
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
            <Button variant="text" onClick={handleClickOpen('paper')} sx={{ color: '#fff', fontFamily: 'var(--type-first)', textTransform: 'none' }}>Impressum</Button>
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
                        Impressum
                    </Typography>
                    <Typography sx={{ paddingY: '1rem' }}>Last updated: November 05, 2021</Typography>
                    <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Website provider</Typography>
                    <Typography>Kampanos Portugal, Unipessoal Lda</Typography>

                    <Box sx={{ paddingY: '.5rem' }}>
                        <Typography sx={{ paddingBottom: '.3rem' }}>Rua do Centro Cultural nº 7, sala 2.2, 1700-106 - Lisboa</Typography>

                        <Typography sx={{ paddingBottom: '.3rem' }}><a href="mailto:service@kampanos.pt" target="_blank" rel="external nofollow noopener">service@kampanos.pt</a></Typography>

                    </Box>
                    <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Managing Director</Typography>
                    <Typography>Andreas Thomä</Typography>

                    <Box sx={{ paddingTop: '2rem' }}>
                        <Typography sx={{ paddingBottom: '.3rem' }}>Sales tax identification number: 515736554</Typography>
                    </Box>

                    <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Online dispute resolution</Typography>
                    <Typography>You can reach the EU platform for online dispute resolution (OS platform) under the following link: <a href="ttps://ec.europa.eu/consumers/odr" target="_blank" rel="external nofollow noopener">https://ec.europa.eu/consumers/odr</a>.</Typography>
                    <Typography variant="h6" sx={{ paddingTop: '1rem', textAlign: 'left' }}>Contact Us</Typography>
                    <Typography>If you have any questions about this Impressum, contact us by email: <strong><a href="mailto:service@kampanos.pt" target="_blank" rel="external nofollow noopener">service@kampanos.pt</a></strong></Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export type ImpressumProps = {
};
