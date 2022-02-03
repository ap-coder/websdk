import React from 'react'

export default function StyleGuide() {
  return (
    <>
      <h2>Headings</h2>
      <h1 className='h1'>h1</h1>
      <h2 className='h2'>h2</h2>
      <h3 className='h3'>h3</h3>
      <h4 className='h4'>h4</h4>
      <h4 className='h5'>h5</h4>

      <hr />

      <h2>Paragraphs</h2>
      <p className='p'>Paragraph</p>
      <p className='p-sm'>Small paragraph</p>
      <p className='p-md'>Medium paragraph</p>
      <p className='p-lg'>Large paragraph</p>

      <hr />

      <h2>Anchor tags</h2>
      <a href='/'>Anchor tag</a>

      <hr />

      <h2>Colors</h2>
      <div className='sg-color background-color-primary'>
        Primary color
        <br />
        var(--color-primary)
      </div>
      <div className='sg-color background-color-secondary'>
        Secondary color
        <br />
        var(--color-secondary)
      </div>
      <div className='sg-color background-color-alert'>
        Anchor tag color
        <br />
        var(--color-alert)
      </div>

      <hr />

      <h2>Tables</h2>
      <table className='table'>
        <thead>
          <tr>
            <td>
              <span className='sr-only'>Label</span>
            </td>
            <td>
              <span className='sr-only'>Label</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Key</td>
            <td>Value</td>
          </tr>
          <tr>
            <td>Key</td>
            <td>Value</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Key</td>
            <td>Value</td>
          </tr>
        </tfoot>
      </table>

      <hr />

      <h2>Alerts</h2>
      <p className='alert' role='alert'>
        Alert
      </p>

      <hr />

      <h2>Grids</h2>
      <h3>Grid 2</h3>
      <div className='grid-2'>
        <div>Cell 1</div>
        <div>Cell 2</div>
      </div>

      <h3>Grid 3</h3>
      <div className='grid-3'>
        <div>Cell 1</div>
        <div>Cell 2</div>
        <div>Cell 3</div>
      </div>

      <hr />

      <h3>Buttons</h3>
      <button className='btn-primary'>Primary</button>
      <button className='btn-secondary'>Secondary</button>

      <hr />

      <h2>Cards</h2>
      <div className='card'>Card</div>

      <hr />

      <h2>Modals</h2>
      <div
        className='modal'
        role='dialog'
        aria-modal='true'
        aria-labelledby='dialog1_label'
      >
        <button className='modal-close-btn'>
          <span className='sr-only'>Close</span>
        </button>
        <div className='modal-header'>
          <h2 id='dialog1_label'>Heading</h2>
        </div>
        <div className='modal-body'>Body</div>
        <div className='modal-footer'>
          <button className='btn-primary'>Primary</button>
          <button className='btn-secondary'>Secondary</button>
        </div>
      </div>
    </>
  )
}
