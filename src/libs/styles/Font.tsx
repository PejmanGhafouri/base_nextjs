import {css, Global} from '@emotion/react'
import {useMemo} from 'react'

export function Fonts() {
  const fontFaces = useMemo(
    () => [
      {
        fontWeight: 900,
        files: {
          ttf: '/fonts/fa/black.ttf',
        },
      },
      {
        fontWeight: 'bold',
        files: {
          ttf: '/fonts/fa/bold.ttf',
        },
      },
      {
        fontWeight: 'normal',
        files: {
          ttf: '/fonts/fa/regular.ttf',
        },
      },
    ],
    []
  )
  return (
    <Global
      styles={css`
        ${fontFaces.map(
          font => `
          @font-face {
            font-family: 'IRANYekan';
            font-style: normal;
            font-weight: ${font.fontWeight};
            src: 
   
                 url(${font.files.ttf}) format('truetype')
          }
        `
        )}
      `}
    />
  )
}
