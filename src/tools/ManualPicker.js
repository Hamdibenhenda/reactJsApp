/**
 * The Manual Picker is used as an accessible focal point picker. It is only activated when
 * a user tabs to the picker through the keyboard, at which point is persists on the screen.
 */
 function ManualPicker({ focalPoint, onChange }) {
    const [isFocused, setIsFocused] = useState(false);
    const [proposedFocalPoint, setProposedFocalPoint] = useState(focalPoint);
    const { x, y } = proposedFocalPoint;
  
    const classList = mergeClasses(!isFocused && 'sr-only', isFocused && 'block mb-4 flex justify-between');
  
    /**
     * When the user changes the manual focal point, we update the internal `proposedFocalPoint`
     * only in order to reflect the changes in the UI. It's not until the user `blur`s away from
     * the elements that we persist the change to the parent.
     *
     * @param {SyntheticEvent} event
     */
    function handleChange(event) {
      const { name, value } = event.target;
  
      let newValue = clamp(parseFloat(value || 0), 0, 100);
  
      if (isNaN(newValue)) {
        return;
      }
  
      setProposedFocalPoint({
        ...proposedFocalPoint,
        [name]: newValue,
      });
    }
  
    function handleBlur() {
      onChange(proposedFocalPoint);
    }
  
    return (
      <a
        className={classList}
        onFocus={() => setIsFocused(true)}
        href="#"
        onClick={e => e.preventDefault()}
        data-testid="manual-picker"
      >
        <span>
          <A11yLabel htmlFor="x">Horizontal %:</A11yLabel>
          <A11yInput name="x" value={x} onChange={handleChange} onBlur={handleBlur} />
        </span>
        <span>
          <A11yLabel htmlFor="y">Vertical %:</A11yLabel>
          <A11yInput name="y" value={y} onChange={handleChange} onBlur={handleBlur} />
        </span>
      </a>
    );
  }