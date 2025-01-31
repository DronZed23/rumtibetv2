
import { RumTibetLogo } from './img/RumTibetLogo';
import { contrys, peopleCounter } from '../../untils/constan';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';
import { CalendarLogo } from './img/CalendarLogo';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const MainPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [newDate, onChange] = useState<Value>(new Date());
    const [calendarVision, setCalendarVision] = useState<number>(0);
    const [dateView, setDateView] = useState<string>("Дата похода");

    const handleChangeCalendarState = () => {
            setCalendarVision(1);
    }

    useEffect(() => {
        setCalendarVision(0)
        setDateView(String(newDate))
      }, [newDate]);

    return (
        <div>
            <div className={styles.firstPathContainer}>
                <div className={styles.header}>
                    <RumTibetLogo className={styles.RumTibetLogo}/>
                    <div className={styles.scrollsButtonsContainer}>
                        <button className={styles.scrollButton}>Про гида</button>
                        <button className={styles.scrollButton}>Программа тура</button>
                        <button className={styles.scrollButton}>Стоимость</button>
                        <button className={styles.scrollButton}>Блог</button>
                        <button className={styles.scrollButton}>Контакты</button>
                    </div>
                    <button className={styles.cunsulteButton}>Консультация</button>
                </div>
                <div className={styles.searchProgramContainer}>
                    <p className={styles.searcherSlogan}>Насладись прогулкой в горах с командой единомышленников</p>
                    <div className={styles.searchersButtonsContainer}>
                        <div className={styles.SelectorContainer}>
                            <Select 
                                    className={styles.selectorContry}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                          ...baseStyles,
                                          backgroundColor: 'none',
                                          height: '52px',
                                          width: '270px',
                                          borderRadius: '8px',
                                          border: '1px solid #E1E3E4',
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            backgroundColor: 'gray',
                                        }),
                                        placeholder:(baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            fontFamily: '"Nunito Sans", serif'
                                        }),
                                    }}
                                     options={contrys} 
                                     placeholder={"Локации для тура"} 
                            />
                            <p className={styles.searchButtonDescription}>выберите из списка</p>
                        </div>
                        <div className={styles.SelectorContainer}>
                            <button className={calendarVision === 0 ? styles.calendarVisionButton : styles.hideCalendarVisionButton} onClick={() => handleChangeCalendarState()}>
                                    <p className={styles.calendarVisionText}>{dateView}</p>
                                    <CalendarLogo className={styles.CalendarLogo}/>
                            </button>
                                <div className={calendarVision === 0 ? styles.hideClaendar : styles.calendar}>
                                    <Calendar onChange={onChange} value={newDate} selectRange={true} />
                                </div>

                                <p className={styles.searchButtonDescription}>укажите диапазон</p>
                        </div>
                        <div className={styles.SelectorContainer}>
                        <Select 
                                    className={styles.selectorContry}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                          ...baseStyles,
                                          backgroundColor: 'none',
                                          height: '52px',
                                          width: '270px',
                                          borderRadius: '8px',
                                          border: '1px solid #E1E3E4',
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            backgroundColor: 'gray',
                                        }),
                                        placeholder:(baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            fontFamily: '"Nunito Sans", serif'
                                        }),
                                    }}
                                     options={peopleCounter} 
                                     placeholder={"Участники"} 
                            />
                            <p className={styles.searchButtonDescription}>минимум 4 человека</p>
                        </div>
                        <button className={styles.searchButton}>Найти программу</button>
                    </div>
                </div>
            </div>
        </div>
    );
};