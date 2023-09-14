import { CiReceipt } from 'react-icons/ci'
import About from './components/About'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';


const data = [
    {
        id: 1,
        name: 'About Me',
        icon: <CiReceipt />,
        component: <About />
    },
    {
        id: 2,
        name: 'Resume',
        icon: <CiReceipt />,
        component: <Resume />
    },
    {
        id: 3,
        name: 'Portfolio',
        icon: <CiReceipt />,
        component: <Portfolio />
    },
    {
        id: 4,
        name: 'Service',
        icon: <CiReceipt />,
        component: <Service />
    },
    {
        id: 5,
        name: 'Testimonial',
        icon: <CiReceipt />,
        component: <Testimonial />
    },
    {
        id: 6,
        name: 'Contact',
        icon: <CiReceipt />,
        component: <Contact />
    }
]


export default data;