import Hero from './components/Hero/Hero';
import NFT from './components/NFT';
import NFTcard from '~/layout/components/NFTcard';
import Collection from './components/Collection/Collection';
import CollectCard from '~/layout/components/CollectCard';
import Creator from './components/Creator';
import { imgs } from '~/assets/images';
import CreatorItem from '~/layout/components/CreatorItem/CreatorItem';
import Community from './components/Community';

function Home() {
    return (
        <>
            <Hero />
            <NFT>
                <NFTcard avatar={imgs.avatar} name="@mahbubul" banner={imgs.NFTcard1} />
                <NFTcard avatar={imgs.avatar} name="@mahbubul" banner={imgs.NFTcard2} />
                <NFTcard avatar={imgs.avatar} name="@mahbubul" banner={imgs.NFTcard3} />
            </NFT>
            <Collection>
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avatar}
                    user="@alaxgender"
                    background={imgs.collect1}
                />
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avatar}
                    user="@alaxgender"
                    background={imgs.collect2}
                />
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avatar}
                    user="@alaxgender"
                    background={imgs.collect3}
                />
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avatar}
                    user="@alaxgender"
                    background={imgs.collect4}
                />
            </Collection>
            <Creator>
                <CreatorItem
                    img={imgs.creator1}
                    title="CREATE YOUR ARTWORK"
                    desc="Each NFT is algorithmically generated by combining 120+ unique traits"
                />
                <CreatorItem
                    img={imgs.creator2}
                    title="UPLOAD YOUR NFT"
                    desc="There are only 13 legendary NFTs available for grabs."
                />
                <CreatorItem
                    img={imgs.creator3}
                    title="LIST THEM FOR SALE"
                    desc="build their brands and communities, as well as introducing brands"
                />
                <CreatorItem
                    img={imgs.creator4}
                    title="COMOPATIBLE EVERYWHERE"
                    desc="Through visual communication and marketing strategies"
                />
            </Creator>
            <Community></Community>
        </>
    );
}

export default Home;
