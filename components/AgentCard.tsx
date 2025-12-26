import type React from "react"

interface AgentCardProps {
  agent: {
    id: string
    name: string
    icon: string
    features: string[]
  }
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-2">
        <div className="text-3xl mr-2">{agent.icon}</div>
        <h3 className="text-xl font-semibold">{agent.name}</h3>
      </div>
      <ul className="list-disc pl-5">
        {agent.features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
