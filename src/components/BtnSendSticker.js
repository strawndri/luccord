import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json'

export function BtnSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
        marginRight: '10px'
      }}
    >
      <Button
        styleSheet={{
          borderRadius: '20%',
          padding: '0 3px 0 0',
          minWidth: '45px',
          minHeight: '45px',
          fontSize: '20px',
          marginBottom: '8px',
          lineHeight: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.secondary['02'],
          hover: {
            backgroundColor: appConfig.theme.colors.secondary['02'],
            filter: 'brightness(0.9)'
          },
          focus: {
            backgroundColor: appConfig.theme.colors.secondary['03']
        }

        }}
        label="⭐"
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.secondary['03'],
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '30px',
            bottom: '30px',
            padding: '16px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: appConfig.theme.colors.neutral["01"],
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'scroll',
            }}
          >
            {appConfig.stickers.map((sticker) => (
              <Text
                onClick={() => {
                //   console.log('[COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                tag="li" key={sticker}
                styleSheet={{
                  width: '40%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.secondary['02'],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.secondary['02'],
                  }
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}