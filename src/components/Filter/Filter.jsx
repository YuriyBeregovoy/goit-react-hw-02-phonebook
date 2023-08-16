export const Filter = ({filterInputValue, onChangeInputFilter}) => {
  return <label>
          <span>Find contacts by name</span>
          <input
        type="text"
        value={filterInputValue} 
        onChange={onChangeInputFilter}
          />
        </label>

}