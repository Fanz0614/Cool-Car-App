import { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/appslice';
//useAdd hook for Dialog component
const useAdd = () => {
  const [vehicle, setVehicle] = useState('');
  const [originPrice, setOriginPrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [type, setType] = useState('');
  const [engine, setEngine] = useState('');
  const [colour, setColour] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  //add new data to state
  const addNewCard = () => {
    return dispatch(
      addCard({
        id: uuid(),
        vehicle: vehicle,
        originPrice: originPrice,
        purchasePrice: purchasePrice,
        type: type,
        engine: engine,
        colour: colour,
        body: body,
        describe: description,
        comment: comment,
      })
    );
  };
  return {
    addNewCard,
    setVehicle,
    setOriginPrice,
    setPurchasePrice,
    setType,
    setEngine,
    setColour,
    setBody,
    setDescription,
    setComment,
  };
};

export default useAdd;
