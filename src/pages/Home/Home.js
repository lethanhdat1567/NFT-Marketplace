import Hero from './components/Hero/Hero';
import NFT from './components/NFT';
import NFTcard from '~/layout/components/NFTcard';
import Collection from './components/Collection/Collection';
import CollectCard from '~/layout/components/CollectCard';
import Creator from './components/Creator';
import { imgs } from '~/assets/images';
import CreatorItem from '~/layout/components/CreatorItem/CreatorItem';
import Community from './components/Community';
import MeeCat from './components/MeeCat';
import MeeCatItem from '~/layout/components/MeeCatItem';
import Feature from './components/Feature';
import Artist from '~/layout/components/Artist/Artist';
import Comment from './components/Comment';
import CommentItem from '~/layout/components/CommentItem';
import Subscribe from './components/Subscribe';
import Slide from '~/layout/components/Slider';
function Home() {
    return (
        <>
            <Hero />
            <NFT>
                <NFTcard a={imgs.b1} avatar={imgs.ava1} name="@mahbubul" banner={imgs.NFTcard1} />
                <NFTcard a={imgs.b2} avatar={imgs.avagr2} name="@mahbubul" banner={imgs.NFTcard2} />
                <NFTcard a={imgs.b3} avatar={imgs.ava3} name="@mahbubul" banner={imgs.NFTcard3} />
            </NFT>
            <Collection>
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.ava1}
                    user="@alaxgender"
                    background={imgs.collect1}
                />
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avatarComment1}
                    user="@alaxgender"
                    background={imgs.collect2}
                />
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avagr2}
                    user="@alaxgender"
                    background={imgs.collect3}
                />
                <CollectCard
                    name="ALTERNATE MEDIUM SPACE"
                    avatar={imgs.avatarComment}
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
            <MeeCat>
                <MeeCatItem img={imgs.MeeCat1} />
                <MeeCatItem img={imgs.MeeCat2} />
                <MeeCatItem img={imgs.MeeCat3} />
                <MeeCatItem img={imgs.MeeCat4} />
                <MeeCatItem img={imgs.MeeCat5} />
                <MeeCatItem img={imgs.MeeCat6} />
                <MeeCatItem img={imgs.MeeCat7} />
                <MeeCatItem img={imgs.MeeCat8} />
            </MeeCat>
            <Feature>
                <Artist
                    head={imgs.Feature1}
                    decor={imgs.FeatureHead1}
                    name="Doruk Kumkumoğlu"
                    nickname="@Doruk Kumkumoğlu"
                />
                <Artist
                    head={imgs.Feature2}
                    decor={imgs.FeatureHead2}
                    name="Foysal Khan Shab"
                    nickname="@Foysal Khan Shab"
                />
                <Artist
                    head={imgs.Feature3}
                    decor={imgs.FeatureHead3}
                    name="Imar khan hasan"
                    nickname="@Doruk Kumkumoğlu"
                />
            </Feature>

            <Slide />
            <Subscribe banner={imgs.subscribe}></Subscribe>
        </>
    );
}

export default Home;
