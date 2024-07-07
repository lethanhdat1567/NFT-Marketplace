import styles from '../Items.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Item1() {
    return (
        <div className={cx('item')}>
            <h2 className={cx('title')}>
                NFTs found them in a way they never expected. It was the perfect opportunity to share their story.
            </h2>
            <p className={cx('desc')}>
                August 16, 2022
                <br />
                <br />
                The best of this space? The people. The stories. The art.
                <br />
                This time, we bring two incredible Latin American artists paving their way in Web3. We interviewed Mark
                Aguilar and Alyssia Aguilar, a.k.a. The Lofty Mom. They created Ethereal Avatars, a 10k NFT project of
                mystical beings that have walked through this life and the next with the mission to connect you with
                your loved ones.
                <br />
                <br />
                Inspired by the traditional Mexican story of Alebrijes, these creatures are known to be spirit guides
                that help those who have die cross over into the afterlife. Alebrijes can be in the form of an animal
                with different characteristics like a snake with wings, or someone with the shape of a lion and a tale
                of a bird. Vibrant colors and patterns showcase their beautiful textures and cultural references.
                <br />
                <br />
                Mark and The Lofty Mom (TLM) believe that through pain and loss, beauty can be born. They took a story
                of loss, in honor of their late son, as a way to bring their creative ideas together and form Ethereal
                Avatars.
            </p>
        </div>
    );
}

export default Item1;
