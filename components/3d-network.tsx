"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function NetworkVisualization3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Products and services
    const items = [
      "POS System",
      "ERP Suite",
      "eCommerce",
      "Accounting",
      "Restaurant",
      "AI Engine",
      "Custom Dev",
      "BI Solutions",
      "Security",
      "Training",
      "AI Integration",
      "24/7 Support",
    ]

    // Create 3D cube positions
    const cubeSize = 120
    const nodes = items.map((item, i) => {
      // Distribute items in a 3D cube pattern
      const x = (i % 4) * cubeSize - cubeSize * 1.5
      const y = Math.floor((i % 8) / 4) * cubeSize - cubeSize / 2
      const z = Math.floor(i / 8) * cubeSize - cubeSize / 2

      return {
        x: x,
        y: y,
        z: z,
        label: item,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
      }
    })

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const scale = 1.5

      const rotX = time * 0.5
      const rotY = time * 0.7
      const rotZ = time * 0.3

      // Project 3D points to 2D
      const projectedNodes = nodes.map((node) => {
        const x = node.x
        const y = node.y
        const z = node.z

        // Rotation around X axis
        const y1 = y * Math.cos(rotX) - z * Math.sin(rotX)
        const z1 = y * Math.sin(rotX) + z * Math.cos(rotX)

        // Rotation around Y axis
        const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY)
        const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY)

        // Rotation around Z axis
        const x3 = x2 * Math.cos(rotZ) - y1 * Math.sin(rotZ)
        const y3 = x2 * Math.sin(rotZ) + y1 * Math.cos(rotZ)

        // Perspective projection
        const perspective = 500
        const scale2D = perspective / (perspective + z2)

        return {
          x2D: centerX + x3 * scale2D * scale,
          y2D: centerY + y3 * scale2D * scale,
          z: z2,
          label: node.label,
          scale: scale2D,
        }
      })

      // Sort by z-depth (painter's algorithm)
      projectedNodes.sort((a, b) => a.z - b.z)

      // Draw connections between nearby nodes
      projectedNodes.forEach((node, i) => {
        projectedNodes.forEach((otherNode, j) => {
          if (i < j) {
            const dx = node.x2D - otherNode.x2D
            const dy = node.y2D - otherNode.y2D
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 200) {
              const opacity = Math.max(0, 1 - distance / 200) * 0.3
              ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(node.x2D, node.y2D)
              ctx.lineTo(otherNode.x2D, otherNode.y2D)
              ctx.stroke()
            }
          }
        })
      })

      // Draw blocks with labels
      projectedNodes.forEach((node) => {
        const blockSize = 30 * node.scale
        const opacity = Math.max(0.3, node.scale)

        // Draw block
        const gradient = ctx.createRadialGradient(node.x2D, node.y2D, 0, node.x2D, node.y2D, blockSize)
        gradient.addColorStop(0, `rgba(168, 85, 247, ${0.6 * opacity})`)
        gradient.addColorStop(1, `rgba(168, 85, 247, ${0.2 * opacity})`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x2D, node.y2D, blockSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw block border
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.5 * opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(node.x2D, node.y2D, blockSize, 0, Math.PI * 2)
        ctx.stroke()

        // Draw label
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * opacity})`
        ctx.font = `${Math.max(9, 12 * node.scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Split label into two lines if needed
        const words = node.label.split(" ")
        if (words.length > 1) {
          ctx.fillText(words[0], node.x2D, node.y2D - 6 * node.scale)
          ctx.fillText(words[1], node.x2D, node.y2D + 6 * node.scale)
        } else {
          ctx.fillText(node.label, node.x2D, node.y2D)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-96 rounded-lg border border-border overflow-hidden bg-secondary/30"
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
