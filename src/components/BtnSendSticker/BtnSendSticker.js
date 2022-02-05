import React from 'react';
import Box from './styles'

export function BtnSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box>
      <button onClick={() => setOpenState(!isOpen)} />
      {isOpen && (
        <div className="box__stickers" onClick={() => setOpenState(false)}>
          <p>Stickers</p>
          <ul className="box__stickers-list">
            {appConfig.stickers.map((sticker) => (
              <li className="box__stickers-item"
                onClick={() => {
                //   console.log('[COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                key={sticker}
                
                >
                <img src={sticker} alt="Sticker"/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Box>
  )
}