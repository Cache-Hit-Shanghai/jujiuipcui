import { Grommet, grommet } from 'grommet';
import StyledComponentsRegistry from '@/jujiuuicomponents/registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Grommet full theme={grommet} themeMode='dark'>
            {children}
          </Grommet>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}