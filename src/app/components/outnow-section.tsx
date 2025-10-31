"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink, Music, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Song {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  spotifyUrl?: string
  thumbnail: string
  duration: string
  releaseDate: string
  genre: string
  plays: string
  platform: "youtube" | "spotify"
}

const songs: Song[] = [
  {
    id: "1",
    title: "Hit it in ",
    description:
      "A cosmic journey through raw emotions and stellar beats. This track showcases Louie Z ability to blend street narratives with otherworldly production, creating an atmosphere that's both grounded and transcendent.",
    youtubeUrl: "https://youtu.be/CD99EPeZco8?si=gye-8sdJoHsFe21r",
    thumbnail: "/song1.jpg",
    duration: "3:42",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "15.2K",
    platform: "youtube",
  },
  {
    id: "2",
    title: "The New Me",
    description:
      "Unapologetic and fierce, this track embodies the raw energy that defines Louie Z's sound. With hard-hitting lyrics and an infectious beat, it's a statement piece that demands attention and respect.",
    youtubeUrl: "https://youtu.be/BAowajgB5o0?si=GxM6pmrEQwhH9Yrk",
    thumbnail: "/song2.jpg",
    duration: "2:58",
    releaseDate: "2024",
    genre: "Trap",
    plays: "22.8K",
    platform: "youtube",
  },
  {
    id: "3",
    title: "Fatal",
    description:
      "A declaration of serious intent and unwavering dedication. This track perfectly captures the essence of Louie Zgrind mentality, delivering powerful verses over a commanding instrumental that leaves no doubt about His commitment to excellence.",
    youtubeUrl: "https://youtu.be/c1F_NDXODxo?si=71n_RqLbY4HzMkzj",
    thumbnail: "/song3.jpg",
    duration: "4:15",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "31.5K",
    platform: "youtube",
  },
  {
    id: "4",
    title: "Jump",
    description:
      "A cosmic journey through raw emotions and stellar beats. This track showcases Louie Z ability to blend street narratives with otherworldly production, creating an atmosphere that's both grounded and transcendent.",
    youtubeUrl: "https://www.youtube.com/watch?v=N5vFNJBKd8w",
    thumbnail: "https://www.shutterstock.com/image-photo/guitar-player-making-rock-during-600nw-2239049561.jpg",
    duration: "3:42",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "15.2K",
    platform: "youtube",
  },
  {
    id: "5",
    title: "Angels & Demons",
    description:
      "Unapologetic and fierce, this track embodies the raw energy that defines Louie Z's sound. With hard-hitting lyrics and an infectious beat, it's a statement piece that demands attention and respect.",
    spotifyUrl: "https://open.spotify.com/album/2qTycbPbFCPEU19UfKzzAq?si=0qsFxKZgRfGhr9ZleOiRtw",
    thumbnail: "https://www.shutterstock.com/image-photo/view-stage-stadium-vocalist-popular-600nw-1668317131.jpg",
    duration: "2:58",
    releaseDate: "2024",
    genre: "Trap",
    plays: "22.8K",
    platform: "spotify",
  },
  {
    id: "6",
    title: "Champagne",
    description:
      "A declaration of serious intent and unwavering dedication. This track perfectly captures the essence of Louie Zgrind mentality, delivering powerful verses over a commanding instrumental that leaves no doubt about His commitment to excellence.",
    spotifyUrl: "https://open.spotify.com/album/5ensD3bkxruCifpvDRtHQ3?si=_jaiwbneSKC309KN-ubI3A",
    thumbnail: "https://c1.wallpaperflare.com/preview/448/284/997/dark-night-party-concert.jpg",
    duration: "4:15",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "31.5K",
    platform: "spotify",
  },
]

export default function OutNowSection() {
  const [hoveredSong, setHoveredSong] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-black via-purple-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs with enhanced neon colors */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/25 via-cyan-500/20 to-blue-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/25 via-purple-500/20 to-indigo-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional neon accent orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Enhanced grid pattern with neon glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />

        {/* Subtle neon border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/15 via-cyan-500/10 to-blue-500/15 backdrop-blur-xl border border-purple-400/20 shadow-lg shadow-purple-500/10 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse shadow-sm shadow-purple-400/50" />
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
            <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide">Latest Releases</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight relative"
            variants={itemVariants}
          >
            <span className="text-white drop-shadow-2xl">OUT</span>{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300 drop-shadow-2xl">
                NOW
              </span>
              {/* Neon glow effect */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 blur-sm opacity-70">
                NOW
              </span>
              {/* Outer glow */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 blur-lg opacity-40">
                NOW
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-medium px-4"
            variants={itemVariants}
          >
            Experience the latest from Louie Z's musical journey.
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-400 font-semibold drop-shadow-sm">
              Each track tells a story of dedication, passion, and street elegance.
            </span>
          </motion.p>
        </motion.div>

        {/* Songs Grid - Fully Responsive */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredSong(song.id)}
              onHoverEnd={() => setHoveredSong(null)}
            >
              <Link
                href={song.platform === "youtube" ? song.youtubeUrl! : song.spotifyUrl!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="relative h-96 md:h-[28rem] lg:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40"
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background Image with dull-to-beautiful effect */}
                  <div className="absolute inset-0">
                    <img
                      src={song.thumbnail || "/placeholder.svg?height=600&width=400&query=music album cover"}
                      alt={`${song.title} cover art`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150 brightness-75 contrast-75 saturate-50"
                    />

                    {/* Dull overlay that fades on hover */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700" />

                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Content overlay with higher z-index */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                    {/* Top content */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                          {song.genre}
                        </span>
                      </div>

                      {/* Floating Music Icon */}
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          y: hoveredSong === song.id ? [-2, 2, -2] : 0,
                          rotate: hoveredSong === song.id ? [0, 180, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredSong === song.id ? Number.POSITIVE_INFINITY : 0,
                          ease: "easeInOut",
                        }}
                      >
                        <Music className="w-3 h-3 text-white" />
                      </motion.div>
                    </div>

                    {/* Center play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-7 h-7 text-white ml-1" />
                      </motion.div>
                    </div>

                    {/* Bottom content */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/70 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {song.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {song.plays}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                        {song.title}
                      </h3>

                      <p className="text-white/80 text-sm leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                        {song.description}
                      </p>

                      <Button
                        className={`w-full ${
                          song.platform === "youtube"
                            ? "bg-gradient-to-r from-red-600/90 to-red-500/90 hover:from-red-600 hover:to-red-500 border-red-500/20 shadow-red-500/25 group-hover:shadow-red-500/40"
                            : "bg-gradient-to-r from-green-600/90 to-green-500/90 hover:from-green-600 hover:to-green-500 border-green-500/20 shadow-green-500/25 group-hover:shadow-green-500/40"
                        } text-white font-semibold py-3 text-sm rounded-xl transition-all duration-300 backdrop-blur-sm border shadow-lg`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {song.platform === "youtube" ? "Watch on YouTube" : "Listen on Spotify"}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Responsive */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-black/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              More Music Coming Soon
            </h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay tuned for more releases from Louie Z. Follow on social media to be the first to know when new tracks
              drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://youtube.com/@lzloudlyvisuals?si=8P22WsSnrvIMPBPy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base inline-block"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
