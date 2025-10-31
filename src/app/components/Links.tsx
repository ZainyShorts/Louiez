"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, ExternalLink, Users, TrendingUp, Sparkles } from "lucide-react"

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

export default function SocialSection() {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@lzloudlyvisuals?si=8P22WsSnrvIMPBPy",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      stats: "Visual Content",
      handle: "@lzloudlyvisuals",
      description: "Music videos, behind the scenes & creative content",
      followers: "15K",
      glowColor: "shadow-red-500/50",
      borderGlow: "group-hover:shadow-red-500/60",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/louiezartists?igsh=MW5kZWUydGlsZnZ1dw==",
      icon: Instagram,
      color: "from-fuchsia-500 to-pink-600",
      stats: "Behind the Scenes",
      handle: "@louiezartists",
      description: "Daily life, studio sessions & exclusive content",
      followers: "28K",
      glowColor: "shadow-fuchsia-500/50",
      borderGlow: "group-hover:shadow-fuchsia-500/60",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/0Z3WN6svAClDBpfbk2HLz8?si=PnlfQUGdRAS7SAGK18Jlog",
      icon: SpotifyIcon,
      color: "from-emerald-400 to-green-500",
      stats: "Latest Tracks",
      handle: "Louie Z",
      description: "Stream latest releases & exclusive tracks",
      followers: "12K",
      glowColor: "shadow-emerald-500/50",
      borderGlow: "group-hover:shadow-emerald-500/60",
    },
  ]

  return (
    <section id="socials" className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255, 96, 175, 0.15),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(3, 60, 70, 0.12),transparent_70%)] animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(10, 124, 86, 0.1),transparent_70%)] animate-pulse delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(2, 1, 1, 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0, 0, 0, 0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <Sparkles className="h-8 w-8 text-cyan-400 animate-spin-slow" />
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent tracking-tight">
              CONNECT
            </h2>
            <Sparkles className="h-8 w-8 text-fuchsia-400 animate-spin-slow" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
          </div>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            Follow the journey across platforms for exclusive content, behind-the-scenes moments, and latest releases.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 max-w-7xl sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {socialLinks.map((platform, index) => (
            <div 
              key={platform.name}   
              className="group animate-in fade-in slide-in-from-bottom-10 duration-1000 w-full"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
             <div
  className={`relative overflow-hidden rounded-3xl 
              bg-gray-100/90
              backdrop-blur-2xl 
              border border-white/20 hover:border-white/30 
              transition-all duration-700 
              hover:scale-105 hover:-translate-y-2 
              shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 
              group p-6 md:p-8 h-full 
              ${platform.glowColor} ${platform.borderGlow}`}
>


                  {/* Neon border glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-2xl`}></div>
                  {/* Glassy inner glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/5 opacity-80"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-white/10"></div>

                  <div className="relative z-10">
                    {/* Platform Header */}
                    <div className="flex items-center gap-4 lg:gap-5 mb-6">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${platform.color} shadow-2xl ${platform.glowColor} flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative backdrop-blur-2xl`}>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${platform.color} opacity-80`}></div>
                        <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-xl"></div>
                        <platform.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white relative z-10" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-black mb-1 text-transparent bg-gradient-to-r from-black to-gray-900 bg-clip-text transition-all duration-500 truncate">
                          {platform.name}
                        </h3>
                        <p className="text-gray-900 text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-300 truncate">
                          {platform.handle}
                        </p>
                      </div>
                      <ExternalLink className="h-5 w-5 lg:h-6 lg:w-6 text-gray-900 group-hover:text-graY-800 transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-800 text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
                      {platform.description}
                    </p>

                    {/* Stats and CTA */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-2xl lg:text-3xl font-black text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-500">
                          {platform.followers}
                        </div>
                        <div className="text-xs lg:text-sm text-gray-500 uppercase tracking-widest font-medium">
                          {platform.stats}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`bg-gradient-to-r ${platform.color} text-white hover:scale-110 transition-all duration-500 border-0 font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-xl shadow-md ${platform.glowColor} hover:shadow-2xl relative overflow-hidden group/btn backdrop-blur-xl`}
                      >
                        <span className="absolute inset-0 bg-white/30 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 text-sm lg:text-base">
                          {platform.name === "Spotify" ? "LISTEN" : "FOLLOW"}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16 px-8 sm:px-12 lg:px-16 py-8 lg:py-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 relative overflow-hidden shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 group max-w-2xl mx-auto">
            {/* Neon border glow */}
            {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-700 blur-2xl"></div> */}
            
            {/* Glassy overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="flex items-center gap-4 lg:gap-5 relative z-10">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all duration-500 backdrop-blur-xl border border-white/20">
                <Users className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-3xl lg:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">55K+</p>
                <p className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Total Followers</p>
              </div>
            </div>
            
            <div className="w-full h-px sm:w-px sm:h-12 lg:h-16 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            
            <div className="flex items-center gap-4 lg:gap-5 relative z-10">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:shadow-emerald-500/80 transition-all duration-500 backdrop-blur-xl border border-white/20">
                <TrendingUp className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-3xl lg:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">25K+</p>
                <p className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Monthly Streams</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000">
          <p className="text-gray-300 text-lg lg:text-2xl mb-8 lg:mb-12 font-light tracking-wide px-4">
            Stay updated with new releases, shows, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center px-4">
            <Button
              asChild
              className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-600 hover:from-fuchsia-500 hover:via-pink-500 hover:to-fuchsia-500 text-white px-8 sm:px-12 lg:px-16 py-4 lg:py-6 rounded-2xl font-black text-base lg:text-lg transition-all duration-700 hover:scale-110 hover:shadow-2xl shadow-fuchsia-500/60 border border-fuchsia-500/50 hover:border-fuchsia-400 relative overflow-hidden group backdrop-blur-xl w-full sm:w-auto"
            >
              <Link href="https://www.instagram.com/louiezartists?igsh=MW5kZWUydGlsZnZ1dw==" target="_blank">
                <span className="absolute inset-0 bg-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></span>
                <span className="relative z-10 uppercase tracking-wider">Follow Instagram</span>
              </Link>
            </Button>
            
            <Button
              asChild
              className="bg-white/5 backdrop-blur-2xl border border-emerald-500/60 hover:border-emerald-400 text-white hover:bg-emerald-500/20 px-8 sm:px-12 lg:px-16 py-4 lg:py-6 rounded-2xl font-black text-base lg:text-lg transition-all duration-700 hover:scale-110 hover:shadow-2xl shadow-emerald-500/40 relative overflow-hidden group w-full sm:w-auto"
            >
              <Link
                href="https://open.spotify.com/artist/0Z3WN6svAClDBpfbk2HLz8?si=PnlfQUGdRAS7SAGK18Jlog"
                target="_blank"
              >
                <span className="absolute inset-0 bg-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-700"></span>
                <span className="relative z-10 uppercase tracking-wider">Listen Spotify</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16"></div>
      </div>
    </section>
  )
}