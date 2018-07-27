import Background from '../../assets/cubed-watermelon-mold-640x533.jpg';

const styles = theme => ({
    appHeader: {
        height: '22vh',
        color: 'black',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        borderBottom: 'black'
    },
    appDescription: {
        paddingRight: '20px',
        fontFamily: 'Marker Felt, fantasy'
    },
    appTitle: {
        textAlign: 'center',
        paddingBottom: '10px',
        margin: '0px',
        fontSize: '5vw',
        color: 'white',
        fontFamily: 'Marker Felt, fantasy'
    },
    searchContainer: {
        backgroundColor: 'white',
        padding: '14px',
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: '1.7vmax',
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
});


export default styles;
