import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';

import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="O maior evento de Cultura Japonesa de Maringá está de volta!">
      <Box
        sx={{
          minHeight: 'calc(100vh - var(--ifm-navbar-height))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(229, 9, 20, 0.22) 0%, transparent 35%),
            radial-gradient(circle at 80% 70%, rgba(229, 9, 20, 0.18) 0%, transparent 35%)
          `,
          position: 'relative',
          overflow: 'hidden',
          px: 2,
          py: 6,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)',
            pointerEvents: 'none',
          },
        }}>
        <Container maxWidth="md" sx={{textAlign: 'center', position: 'relative', zIndex: 1}}>
          <Fade in timeout={1200}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)',
                borderRadius: 5,
                p: {xs: 2, sm: 3, md: 4},
                mb: 5,
                boxShadow: '0 0 60px rgba(229, 9, 20, 0.35), 0 20px 50px rgba(0,0,0,0.5)',
                border: '2px solid rgba(229, 9, 20, 0.4)',
                position: 'relative',
                animation: 'float 4s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': {transform: 'translateY(0)'},
                  '50%': {transform: 'translateY(-8px)'},
                },
              }}>
              <Box
                component="img"
                src="/img/logo.png"
                alt="AnimeIngá Logo"
                sx={{
                  width: {xs: 260, sm: 380, md: 480},
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Fade>

          <Fade in timeout={1600}>
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 2,
                fontSize: {xs: '1.85rem', sm: '2.75rem', md: '3.25rem'},
                lineHeight: 1.2,
              }}>
              Maringá sentiu saudades,
              <br />
              <Box
                component="span"
                sx={{
                  color: '#e50914',
                  textShadow: '0 0 24px rgba(229, 9, 20, 0.6)',
                }}>
                e nós voltamos!
              </Box>
            </Typography>
          </Fade>

          <Fade in timeout={2000}>
            <Typography
              variant="h5"
              sx={{
                color: '#b0b0b0',
                mb: 5,
                fontSize: {xs: '1.1rem', sm: '1.35rem', md: '1.5rem'},
                fontWeight: 400,
              }}>
              Mais informações em breve!
            </Typography>
          </Fade>

          <Fade in timeout={2400}>
            <Box
              sx={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 4,
                p: {xs: 3, sm: 4},
                backdropFilter: 'blur(4px)',
                display: 'inline-block',
                maxWidth: 520,
                width: '100%',
              }}>
              <Typography variant="body1" sx={{color: '#e0e0e0', mb: 2.5, fontSize: '1.05rem'}}>
                Se você é expositor, utilize o formulário abaixo:
              </Typography>
              <Button
                component={Link}
                href="https://forms.gle/p3M4Fd5TgF3vyFxU7"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#e50914',
                  color: '#ffffff',
                  fontWeight: 700,
                  px: 5,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  boxShadow: '0 0 24px rgba(229, 9, 20, 0.45)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#ff1a25',
                    boxShadow: '0 0 36px rgba(229, 9, 20, 0.65)',
                    transform: 'translateY(-2px)',
                  },
                }}>
                Quero ser Expositor
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Layout>
  );
}
