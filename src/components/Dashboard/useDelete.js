import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/appslice';
import { useHistory } from 'react-router-dom';
//custom hook for dashboard component
const useDelete = ({ value }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //nav to sepefic detail page use history,id and record state
  const handleClick = () => {
    history.push({
      pathname: `/details/${value.id}`,
      state: { data: value },
    });
  };
  //delete card by id
  const cardDelete = (id) => {
    return dispatch(deleteCard(id));
  };
  return {
    cardDelete,
    handleClick,
  };
};

export default useDelete;
