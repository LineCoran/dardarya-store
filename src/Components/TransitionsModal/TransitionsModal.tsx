import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeModalVisible } from '../../store/modalSlice';
import PriceModal from '../PriceModal/PriceModal';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 40,
  overflow: 'scroll',
  p: 4,
  padding: '1rem',
};

export const TransitionsModal = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((store) => store.modalReducer.isOpen);

  return (
    <div>
      <Modal
        aria-labelledby={'transition-modal-title'}
        aria-describedby={'transition-modal-description'}
        open={open}
        onClose={() => dispatch(changeModalVisible(false))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <PriceModal />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
