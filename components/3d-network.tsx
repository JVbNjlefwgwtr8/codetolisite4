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

    // Create nodes in a circular pattern
    const nodes = items.map((item, i) => {
      const angle = (i / items.length) * Math.PI * 2
      const radius = Math.min(canvas.width, canvas.height) * 0.3
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        label: item,
        angle: angle,
        radius: radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }
    })

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Orbital motion
        const orbitAngle = node.angle + time * 0.3
        node.x = centerX + Math.cos(orbitAngle) * node.radius
        node.y = centerY + Math.sin(orbitAngle) * node.radius

        // Draw connections to center
        ctx.strokeStyle = `rgba(168, 85, 247, 0.1)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(node.x, node.y)
        ctx.stroke()

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - distance / 150)})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        })

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8)
        gradient.addColorStop(0, "rgba(168, 85, 247, 0.8)")
        gradient.addColorStop(1, "rgba(168, 85, 247, 0.3)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Draw label
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.font = "11px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(node.label, node.x, node.y + 20)
      })

      // Draw center circle
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30)
      centerGradient.addColorStop(0, "rgba(168, 85, 247, 0.4)")
      centerGradient.addColorStop(1, "rgba(168, 85, 247, 0.1)")
      ctx.fillStyle = centerGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "rgba(168, 85, 247, 0.3)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Codetoli", centerX, centerY - 5)
      ctx.font = "11px sans-serif"
      ctx.fillStyle = "rgba(168, 85, 247, 0.8)"
      ctx.fillText("Technology", centerX, centerY + 10)

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
