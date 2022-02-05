import { useState } from 'react';
import Box from './styles'
import appConfig from '../../../config.json';

const BtnSendSticker = (props) => {

  const [isOpen, setOpenState] = useState('');

  return (
    <Box>
      <button type="button" onClick={() => setOpenState(!isOpen)} />
      {isOpen && (
        <div className="box__stickers" onClick={() => setOpenState(false)}>
          <p>Stickers</p>
          <ul className="box__stickers-list">
            {appConfig.stickers.map((sticker) => (
              <li className="box__stickers-item"
                onClick={() => {
                  // console.log('[COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                key={sticker}>
                <img src={sticker} alt="Sticker"/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Box>
  )
}

export default BtnSendSticker;