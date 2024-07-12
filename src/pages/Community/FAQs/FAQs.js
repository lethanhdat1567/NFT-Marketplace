import classNames from 'classnames/bind';
import styles from './FAQs.module.scss';
import CollectorItem from './Components/Collector/CollectorItem';
import Collector from './Components/Collector';
import Subscribe from '~/pages/Home/components/Subscribe';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function FAQs() {
    const items = {
        collectors: [
            {
                title: 'Creating a MetaMask Wallet in Five Steps',
                desc: 'MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital collectibles. Think of a crypto wallet as a personal safe in which your precious digital possessions can be safely stored.',
            },
            {
                title: 'Meecat Drops: Collectibles Information Tooltips',
                desc: 'MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital collectibles. Think of a crypto wallet as a personal safe in which your precious digital possessions can be safely stored.',
            },
            {
                title: 'Storing, Displaying and Transferring NFTs',
                desc: 'MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital collectibles. Think of a crypto wallet as a personal safe in which your precious digital possessions can be safely stored.',
            },
            {
                title: 'A Guide to Buying Digital Collectibles',
                desc: 'MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital collectibles. Think of a crypto wallet as a personal safe in which your precious digital possessions can be safely stored.',
            },
            {
                title: 'Creating a MetaMask Wallet in Five Steps',
                desc: 'MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital collectibles. Think of a crypto wallet as a personal safe in which your precious digital possessions can be safely stored.',
            },
            {
                title: 'Fixed Price and Offer-based Listings',
                desc: 'MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital collectibles. Think of a crypto wallet as a personal safe in which your precious digital possessions can be safely stored.',
            },
        ],
        general: [
            {
                title: 'Platform Commission and Secondary Market Sales and Royalties',
                desc: 'The Meecat Marketplace Commission model applies to artwork and collectibles (including phygital goods) created by an artist without creative input from the Meecat platform.',
            },
            {
                title: 'Meecat Drops: Collectibles Information Tooltips',
                desc: 'The Meecat Marketplace Commission model applies to artwork and collectibles (including phygital goods) created by an artist without creative input from the Meecat platform.',
            },
            {
                title: "Meecat's Token Standard: ERC-1155",
                desc: 'The Meecat Marketplace Commission model applies to artwork and collectibles (including phygital goods) created by an artist without creative input from the Meecat platform.',
            },
            {
                title: 'Returns, Delivery Costs and Additional Charges',
                desc: 'The Meecat Marketplace Commission model applies to artwork and collectibles (including phygital goods) created by an artist without creative input from the Meecat platform.',
            },
            {
                title: 'Creating and Curating a Collection',
                desc: 'The Meecat Marketplace Commission model applies to artwork and collectibles (including phygital goods) created by an artist without creative input from the Meecat platform.',
            },
            {
                title: 'The Meecat Duck Membership System',
                desc: 'The Meecat Marketplace Commission model applies to artwork and collectibles (including phygital goods) created by an artist without creative input from the Meecat platform.',
            },
        ],
        artist: [
            {
                title: 'Listing NFT Artworks',
                desc: 'If you want to sell your art on the Dissrup platform, you will need to list each artwork individually. Before you can list your NFT artwork',
            },
            {
                title: 'Technical Specifications for Uploading Artwork to the Dissrup Marketplace',
                desc: 'If you want to sell your art on the Dissrup platform, you will need to list each artwork individually. Before you can list your NFT artwork',
            },
            {
                title: 'Crypto Transaction Fees Explained',
                desc: 'If you want to sell your art on the Dissrup platform, you will need to list each artwork individually. Before you can list your NFT artwork',
            },
            {
                title: 'Joining Dissrup as a Creator',
                desc: 'If you want to sell your art on the Dissrup platform, you will need to list each artwork individually. Before you can list your NFT artwork',
            },
        ],
    };

    return (
        <>
            <div className={cx('FAQs')}>
                <div className="container">
                    <div className={cx('heading')}>
                        <h1 className={cx('title')}>FAQs</h1>
                        <p className={cx('desc')}>
                            You’ll find answers to most questions about Meecat, our community, and our products in the
                            FAQ section.
                        </p>
                    </div>
                    <Collector title={'Collectors'}>
                        {items.collectors.map((item, index) => (
                            <CollectorItem key={index} title={item.title} desc={item.desc} index={index} />
                        ))}
                    </Collector>
                    <Collector title={'General'}>
                        {items.general.map((item, index) => (
                            <CollectorItem key={index} title={item.title} desc={item.desc} index={index} />
                        ))}
                    </Collector>
                    <Collector title={'Artists'}>
                        {items.artist.map((item, index) => (
                            <CollectorItem key={index} title={item.title} desc={item.desc} index={index} />
                        ))}
                    </Collector>
                </div>
            </div>
            <Subscribe banner={imgs.FAQsub}></Subscribe>
        </>
    );
}

export default FAQs;
