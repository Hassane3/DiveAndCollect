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

const DiveSpecies: React.FC<DiveShowProps> = (props) => {
    let location = useLocation();
    const [species, setSpecies] = useState(location.state.species);

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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DiveSpecies;
