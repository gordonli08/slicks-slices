import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
}).format;

function PriceInput({ type, value, onChange, forwardedRef }) {
    return (
        <div>
            <h2>
                {type.title} - {value ? formatMoney(value / 100) : null}
            </h2>
            <p>{type.description}</p>
            <input
                type={type.name}
                value={value}
                onChange={(event) =>
                    onChange(createPatchFrom(event.target.value))
                }
                ref={forwardedRef}
            />
        </div>
    );
}

PriceInput.focus = function () {
    this._inputElement.focus();
};

PriceInput.propTypes = {
    type: PropTypes.object,
    value: PropTypes.number,
    onChange: PropTypes.func,
    forwardedRef: PropTypes.func,
};

PriceInput.displayName = 'PriceInput';

export default forwardRef((props, ref) => (
    <PriceInput {...props} forwardedRef={ref} />
));
