import React, { useState } from "react";

export const SizeQuantityBtn = (props) => {
  const [sizeValue, setValue] = useState({ size: null, available: null });
  const [quantityCount, setCount] = useState({
    availableArr: null,
    wantedQuantity: null,
  });
  let sizes = props.sizeName;

  const selectSize = (e, props) => {
    let key = e.target.dataset.key;
    let keyArr = [];
    setValue({ size: e.target.value, available: props.sizeValue[key] });
    for (let i = 1; i <= props.sizeValue[key]; i++) {
      keyArr.push(i);
    }
    setCount({ availableArr: keyArr });
  };

  let sizeOptions = sizes.map((size, k) => (
    <button
      className="dropdown-item text-capitalize text-center"
      type="button"
      data-key={k}
      key={k}
      value={size}
      onClick={(e) => selectSize(e, props)}
    >
      {size}
    </button>
  ));

  let quantityList;
  if (quantityCount.availableArr) {
    let available = quantityCount.availableArr;
    quantityList = available.map((count, k) => (
      <button
        className="dropdown-item text-center"
        type="button"
        key={k}
        value={count}
        onClick={(e) => setCount({ wantedQuantity: e.target.value })}
      >
        {count}
      </button>
    ));
  }

  return (
    <React.Fragment>
      <div className="btn-group dropright mt-1 mb-1 form_buttons">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle text-capitalize testing"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          id="size-button"
          value={sizeValue.size}
        >
          {"Size"}
          {sizeValue.size ? `: ${sizeValue.size}` : ""}
        </button>
        <div className="dropdown-menu text">{sizeOptions}</div>
      </div>
      <div className="btn-group dropright mt-1 mb-1 form_buttons">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle testing"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          id="quantity-button"
          value={quantityCount.wantedQuantity}
        >
          {"Quantity"}
          {quantityCount.wantedQuantity
            ? `: ${quantityCount.wantedQuantity}`
            : ""}
        </button>
        <div
          className="dropdown-menu text text-center"
          id="quantity"
          value={quantityCount.wantedQuantity}
        >
          {quantityList ? quantityList : "Select A Size"}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SizeQuantityBtn;
