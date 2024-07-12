import classNames from 'classnames/bind';
import styles from './Validation.module.scss';
import { useFormik } from 'formik';
const cx = classNames.bind(styles);

function Validation() {
    const validate = (values) => {
        const errors = {};
        if (!values.firstname) {
            errors.firstName = 'Required';
        } else if (values.firstname.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastname) {
            errors.lastName = 'Required';
        } else if (values.lastname.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            alert('Hiện tại chưa có tính năng đăng nhập :(');
            window.location.href = '/';
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={cx('form')}>
            {/* Form group */}
            <div className={cx('form-group')}>
                <label htmlFor="email" className={cx('form-lable')}>
                    Email
                </label>
                <input
                    id="email"
                    className={cx('form-input')}
                    placeholder="Your Email..."
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <span className={cx('error')}>{formik.errors.email}</span> : null}
            </div>
            {/* Form group */}
            <div className={cx('form-group')}>
                <label htmlFor="firstname" className={cx('form-lable')}>
                    First Name
                </label>
                <input
                    id="firstname"
                    className={cx('form-input')}
                    placeholder="Your First Name..."
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName ? <span className={cx('error')}>{formik.errors.firstName}</span> : null}
            </div>
            {/* Form group */}
            <div className={cx('form-group')}>
                <label htmlFor="lastname" className={cx('form-lable')}>
                    Last Name
                </label>
                <input
                    id="lastname"
                    className={cx('form-input')}
                    placeholder="Your Last Name..."
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName ? <span className={cx('error')}>{formik.errors.lastName}</span> : null}
            </div>
            <button type="submit" className={cx('btn')}>
                Sign In
            </button>
        </form>
    );
}

export default Validation;
