import { Children, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { setPageTitle } from '../store/themeConfigSlice';
import plongeData from './../util/plonges.json';
import { useLocation } from 'react-router-dom';
import { Uploader } from '../components/Uploader';

interface DiveShowProps {
    id: number;
    date: string;
    geoLocation: string;
    city: string;
    depth: number;
    duration: number;
}

const DiveShow: React.FC<DiveShowProps> = (props) => {
    let location = useLocation();
    const [species, setSpecies] = useState(location.state.species);

    console.log('Species ==> ', species);

    species.map((species: any) => {
        console.log(species.name);
    });

    const handleAddSpecies = () => {
        return (
            <>
                <NavLink
                    to="/apps/diveSpecies"
                    state={{ id: props.id, city: props.city, depth: props.depth, date: props.date, duration: props.duration, geoLocation: props.geoLocation, species: species }}
                >
                    <div className="text-primary underline hover:no-underline font-semibold">{`#${props.id}`}</div>
                </NavLink>
                <NavLink to="/apps/invoice/preview" className="flex hover:text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.5"
                            d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </NavLink>
            </>
        );
    };
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/apps/diveBook" className="text-primary hover:underline">
                        Carnet de plongée
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>plongé #{location.state.id}</span>
                </li>
            </ul>
            <h2 className="text-2xl font-semibold uppercase">Plongé #{location.state.id}</h2>

            <div>
                <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                    <h6 className="text-lg font-bold mb-5">General Information</h6>
                    <div className="">
                        <label className="font-semibold text-slate-400 text-xl" htmlFor={location.state.city}>
                            City :
                            <input className="text-md font-bold mb-5" name={location.state.city} value={location.state.city} />
                        </label>
                        <label className="font-semibold text-slate-400 text-xl" htmlFor={location.state.geoLocation}>
                            Geo localisation :
                            <input className="text-md font-bold mb-5" name={location.state.geoLocation} value={location.state.geoLocation} />
                        </label>
                        <label className="font-semibold text-slate-400 text-xl" htmlFor={location.state.date}>
                            Date :
                            <input className="text-md font-bold mb-5" name={location.state.date} value={location.state.date} />
                        </label>
                        <label className="font-semibold text-slate-400 text-xl" htmlFor={location.state.duration}>
                            Durée :
                            <input className="text-md font-bold mb-5" name={location.state.duration} value={location.state.duration} />
                        </label>
                    </div>

                    <div className="flex flex-col items-start ">
                        <div className="">
                            <h3 className="text-lg font-bold mb-5">Especes</h3>
                            <ul>
                                {species.map((species: any) => (
                                    <li className="mb-4">
                                        <div className="flex items-center">
                                            <img src={species.image} alt={species.name} className="w-10 h-10 rounded-md object-cover mr-5" />
                                            <p className="font-semibold text-primary text-xl">{species.name}</p>
                                            <div className="flex">
                                                <label className="font-semibold text-slate-400 text-xl" htmlFor={species.id}>
                                                    Nombre
                                                </label>
                                                <input className="font-semibold text-primary text-xl" id={species.id} name={species.id} value={species.number} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <Uploader /> */}
                        <div className="sm:col-span-2 mt-3">
                            <button type="button" className="btn btn-primary" onClick={handleAddSpecies}>
                                Ajouter une espèce
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DiveShow;
