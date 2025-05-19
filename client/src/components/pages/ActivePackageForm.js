import { useContext, useEffect } from 'react';
import activePackageContext from '../../context/main/activePackages/activePackageContext';

const ActivePackageForm = () => {
  const { current, GetActivePackage } = useContext(activePackageContext);

  useEffect(() => {
    Object.keys(current).length < 1 && GetActivePackage();
  }, []);

  const FormatDate = (stringDate) => {
    if (!stringDate) {
      return;
    }

    const date = new Date(stringDate);

    const format = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    };

    return date.toLocaleDateString('es-MX', format);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='title'>
          <span>Paquete vigente</span>
        </div>

        <form action='#'>
          <div className='row'>
            <label htmlFor='package'>Nombre del paquete:</label>
            <input
              id='package'
              name='package'
              type='text'
              value={current.Package}
              disabled
            />
          </div>
          <div className='row'>
            <label htmlFor='startDate'>Fecha de adquisición:</label>
            <input
              id='startDate'
              name='startDate'
              type='text'
              value={FormatDate(current.StartDate)}
              disabled
            />
          </div>
          <div className='row'>
            <label htmlFor='remainingHours'>Horas restantes:</label>
            <input
              id='remainingHours'
              name='remainingHours'
              type='text'
              value={current.RemainingHours}
              disabled
            />
          </div>
          <div className='row'>
            <label htmlFor='finishDate'>Fecha de caducidad:</label>
            <input
              id='finishDate'
              name='finishDate'
              type='text'
              value={FormatDate(current.FinishDate)}
              disabled
            />
          </div>
          <div className='row'>
            <label htmlFor='switch'>Skip Next Update:</label>
            <div className='toggle-switch'>
              <input
                type='checkbox'
                className='checkbox'
                name='switch'
                id='switch'
                disabled
              />
              <label className='switchLabel' htmlFor='switch'>
                <span className='inner' />
                <span className='switch' />
              </label>
            </div>
          </div>
          <div className='row'>
            <label htmlFor='HoursToSubstract'>Horas por ensayo:</label>
            <input
              id='HoursToSubstract'
              name='HoursToSubstract'
              type='text'
              value={current.HoursToSubstract}
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivePackageForm;
