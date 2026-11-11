var e=`import { ProjectGridCard } from '@/features/tracker/components/common/ProjectGridCard'

import { PROJECT } from '../../lib/sampleData'

/** The Tracker project card (\`QUIET_CARD\`): avatar, key, name, lead, open-task count, a star on hover. A made-up project, no roster fetch. */
export default function ProjectCards() {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4">
      <ProjectGridCard project={PROJECT} onOpen={() => undefined} onStar={() => undefined} selfId="u1" openTaskCount={12} />
      <ProjectGridCard project={{ ...PROJECT, id: 'p2', key: 'APP', name: 'Mobile app' }} starred onOpen={() => undefined} onStar={() => undefined} selfId="u1" openTaskCount={0} />
    </ul>
  )
}
`;export{e as default};