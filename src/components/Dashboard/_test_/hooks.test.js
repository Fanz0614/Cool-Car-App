import { renderHook, act } from '@testing-library/react-hooks';
import useDelete from '../useDelete';
import { useDispatch } from 'react-redux';

test('should hook runs', () => {
  const mockDispatch = jest.fn();
  jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
  }));
  it('should delete card', () => {
    const { result } = renderHook(() => useDelete());
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);
    act(() => {
      result.current.cardDelete();
    });
    expect(mockDispatch).toHaveBeenCalledWith('delete');
  });
});
