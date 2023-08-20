import { Dot } from 'lucide-react';
import Button from './Button';
import PropTypes from 'prop-types';

function ClientCard(props) {


    const status = {
        active: {
            color: '#4BAF5C',
            text: 'Ativo'
        },

        inactive: {
            color: '#D73343',
            text: 'Inativo'
        },
        waiting: {
            color: '#D0A311',
            text: 'Aguardando ativação'
        },
        disabled: {
            color: '#D1D1D1',
            text: 'Desativado'
        }
    }



const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

const formatPhone = (phone) => {
    return phone.replace(/(\d{2})(\d?)(\d{4,5})(\d{4})/, '($1) $2$3-$4');
}



    return (
        <div className="w-full h-28 p-6 justify-between items-center flex flex-row border-2 border-gray-100 gap-4">
            <div className='w-1/4'>
                <p className="text-lg text-gray-500 font-semibold overflow-auto">
                    {props.name}
                </p>
                <p className="text-gray-400 font-normal text-lg overflow-auto">
                    {props.email}
                </p>
            </div>

            <div className='w-1/4 overflow-auto'>
                <p className="text-lg text-gray-500 font-semibold">
                    {formatCPF(props.cpf)}
                </p>
                <p className="text-gray-400 font-normal text-lg">
                    {formatPhone(props.phone)}
                </p>
            </div>
            <div className='flex flex-row w-1/4 items-center relative overflow-auto'>
                <Dot size={75} color={status[props.status].color} strokeWidth={3} />
                <p className='absolute ml-14'>{status[props.status].text}</p>
            </div>

            <div className='w-1/4 flex flex-row justify-end overflow-auto'>
            <Button name="Editar" size="big" background="white" active={() => console.log(props.id)} />
            </div>
        </div>



    )
}

ClientCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default ClientCard