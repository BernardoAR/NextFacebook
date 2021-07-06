import StoryCard from './StoryCard';
const stories = [
  {
    key: '1',
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  { key: '2', name: 'Bill Gates', src: 'https://links.papareact.com/4u4', profile: 'https://links.papareact.com/zvy' },
  { key: '3', name: 'Bill Gates', src: 'https://links.papareact.com/4u4', profile: 'https://links.papareact.com/zvy' },
  {
    key: '4',
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  { key: '5', name: 'Bill Gates', src: 'https://links.papareact.com/4u4', profile: 'https://links.papareact.com/zvy' },
];
function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard key={story.key} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
