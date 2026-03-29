/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  MonitorSmartphone, 
  Box, 
  Code2, 
  Users, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  ChevronRight,
  Calendar,
  Award,
  Mail,
  Github,
  Download,
  Info,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [showPrintHint, setShowPrintHint] = useState(false);

  const handlePrint = () => {
    if (window.self !== window.top) {
      // In an iframe, print might be blocked or not work correctly.
      setShowPrintHint(true);
      setTimeout(() => setShowPrintHint(false), 6000);
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-slate-50 print:bg-white text-slate-600">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 print:hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 print:py-8 print:px-0">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 border-b border-slate-200 pb-8"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
                  何铸宁 <span className="text-slate-400 font-light text-3xl md:text-4xl ml-2">| Greendou</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-emerald-600 font-medium mb-6">
                  资深前端开发工程师 <span className="text-slate-300 mx-2">/</span> 技术经理
                </h2>
              </div>
              
              <div className="relative flex flex-col items-end">
                <button 
                  onClick={handlePrint}
                  className="print:hidden flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-colors text-sm font-medium w-full sm:w-auto"
                >
                  <Download className="w-4 h-4" />
                  导出 PDF
                </button>
                {showPrintHint && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 right-0 bg-slate-800 text-white text-xs p-3 rounded-lg shadow-lg w-64 z-50 print:hidden"
                  >
                    <div className="flex gap-2 items-start">
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
                      <p className="leading-relaxed">
                        由于预览环境限制，请点击右上角<strong>「在新标签页中打开」</strong>后，再点击此按钮或按 <kbd className="bg-slate-700 px-1 rounded text-[10px]">Ctrl+P</kbd> 导出。
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
              
            <div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-sm text-slate-500 font-mono mb-6">
                <a
                  href="mailto:zn.he@foxmail.com"
                  className="flex items-center gap-2 hover:text-slate-800 transition-colors underline-offset-4 hover:underline"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  zn.he@foxmail.com
                </a>
                <a
                  href="https://github.com/greendou"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-slate-800 transition-colors underline-offset-4 hover:underline"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  github.com/greendou
                </a>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-6 text-sm text-slate-600 font-mono">
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"><Code2 className="w-4 h-4 text-slate-400" /> 前端架构 / 3D / AI Agent</span>
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"><Briefcase className="w-4 h-4 text-slate-400" /> 10年研发与管理经验</span>
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"><MapPin className="w-4 h-4 text-slate-400" /> 深圳, 中国</span>
              </div>
            </div>

            {/* Education - Integrated smoothly */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-slate-500 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-700 font-medium"><GraduationCap className="w-4 h-4 text-emerald-600" /> 教育背景</div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-slate-800 font-medium">北京邮电大学</span>
                  <span>信息与通信系统 (硕士)</span>
                  <span className="font-mono text-slate-400">2013-2015</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-300 mt-0.5"></div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-slate-800 font-medium">北京邮电大学</span>
                  <span>通信工程 (本科)</span>
                  <span className="font-mono text-slate-400">2009-2013</span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Professional Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2"><Award className="w-4 h-4"/> 专业摘要</h3>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-600 max-w-4xl">
            <p>
              拥有 10 年大前端与跨端研发经验，深耕 <strong className="text-slate-900 font-medium">大前端架构设计、Web 性能调优及复杂业务系统的工程化治理</strong>。
            </p>
            <p>
              具备大型复杂业务系统的技术架构与攻坚经验，曾作为核心骨干与技术负责人主导跨技术栈（涵盖前后端、移动端、Unity等）的底层架构设计与基础设施建设，擅长在复杂业务场景下进行技术选型与效能提升。
            </p>
            <p>
              具备丰富的图形化编程与 3D 引擎（WebGPU/WebGL）业务落地经验，并积极探索 <strong className="text-slate-900 font-medium">AI Agent</strong> 在复杂交互场景中的工程化应用，致力于用前沿技术驱动产品创新与业务增长。
            </p>
          </div>
        </motion.section>

        {/* Core Competencies */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2"><Code2 className="w-4 h-4"/> 核心竞争力</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. Web Optimization */}
            <div className="glass-card p-6 group hover:border-cyan-500/30 transition-colors print:shadow-none print:border-slate-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-50 rounded-lg"><MonitorSmartphone className="w-5 h-5 text-cyan-600" /></div>
                <h4 className="text-lg font-semibold text-slate-900">前端架构与跨端开发</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-cyan-500 shrink-0" /> 精通 React, NextJS, TypeScript，具备大型复杂单页应用、Monorepo 治理及跨端架构（Hybrid/RN）经验。</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-cyan-500 shrink-0" /> 深入研究前端性能调优，在首屏秒开、SSR 改造、内存泄漏排查及渲染帧率优化方面有丰富实战经验。</li>
              </ul>
            </div>

            {/* 2. Graphical & 3D */}
            <div className="glass-card p-6 group hover:border-orange-500/30 transition-colors print:shadow-none print:border-slate-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg"><Box className="w-5 h-5 text-orange-600" /></div>
                <h4 className="text-lg font-semibold text-slate-900">3D 引擎与图形化编程</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 shrink-0" /> 深入使用 Pixi.js, Fabric.js 构建复杂图形化平台；具备 WebGL / WebGPU 渲染底层演进与性能调优经验。</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 shrink-0" /> 熟悉 Rust + WGPU + Deno Core (V8) 跨端 3D 引擎架构设计与业务落地。</li>
              </ul>
            </div>

            {/* 3. AI Agent */}
            <div className="glass-card p-6 group hover:border-purple-500/30 transition-colors print:shadow-none print:border-slate-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg"><Sparkles className="w-5 h-5 text-purple-600" /></div>
                <h4 className="text-lg font-semibold text-slate-900">AI Agent 与大模型工程化</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" /> 具备将 LLM 能力深度融入复杂交互场景（如 3D 场景编辑）的实战经验，熟练使用 Vercel AI SDK、Zod 构建可靠的结构化对话流。</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" /> 关注 AI 驱动的研发效能提升与产品创新，能够结合自然语言交互（LUI）与图形用户界面（GUI）打造下一代用户体验。</li>
              </ul>
            </div>

            {/* 4. Tech Leadership */}
            <div className="glass-card p-6 group hover:border-emerald-500/30 transition-colors print:shadow-none print:border-slate-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg"><Users className="w-5 h-5 text-emerald-600" /></div>
                <h4 className="text-lg font-semibold text-slate-900">技术攻坚与工程效能</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" /> 主导公司级前端规范、基础设施建设与核心技术攻坚，显著提升研发效能。</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" /> 具备大型跨技术栈团队的技术指导与协同经验，擅长敏捷迭代与复杂项目落地。</li>
              </ul>
            </div>

          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2"><Briefcase className="w-4 h-4"/> 工作经历</h3>
          
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="relative pl-8 md:pl-0 job-block">
              {/* Mobile Timeline Line */}
              <div className="absolute left-2 top-2 w-px h-full bg-slate-200 md:hidden" />
              {/* PC Timeline Line */}
              <div className="hidden md:block absolute left-38 top-2 w-px h-full bg-slate-200" />
              
              <div className="flex flex-col md:flex-row gap-3 md:gap-12">
                <div className="md:w-36 shrink-0 pt-1 relative">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute -left-[1.85rem] top-2.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-500 md:hidden" />
                  <span className="text-sm font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block border border-emerald-100">2021.11 — 2026.01</span>
                </div>
                
                <div className="relative flex-1 bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors print:shadow-none print:border-slate-300">
                  <div className="hidden md:block absolute -left-[3.4rem] top-2 w-3 h-3 rounded-full bg-white border-2 border-emerald-500" />
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-1">3D 引擎架构师 / 技术负责人</h4>
                  <h5 className="text-slate-600 mb-4 font-medium">深圳奇梦岛科技有限公司 <span className="text-slate-400 text-sm font-normal">（由编程猫孵化）</span></h5>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    全面负责公司核心 3D 可编程引擎的底层架构设计与技术演进。作为核心骨干推动跨端渲染与性能优化，并统筹跨职能团队的技术交付。
                  </p>
                  
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li><strong className="text-slate-800">架构与选型：</strong>根据产品形态主导核心技术选型与底层架构设计，设计并实现面向用户的高效 JS API。</li>
                    <li><strong className="text-slate-800">性能攻坚：</strong>针对业务痛点，提出并落地多项产品稳定性与渲染性能优化方案。</li>
                    <li><strong className="text-slate-800">跨栈开发：</strong>作为核心骨干，直接承担并推动 Rust、JS 及移动端等跨栈技术需求的开发落地。</li>
                    <li><strong className="text-slate-800">技术协同：</strong>统筹技术迭代计划，主导代码评审，提升前端、移动端等跨团队的整体工程质量与交付效率。</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative pl-8 md:pl-0 job-block">
              {/* Mobile Timeline Line */}
              <div className="absolute left-2 top-2 w-px h-full bg-slate-200 md:hidden" />
              {/* PC Timeline Line */}
              <div className="hidden md:block absolute left-38 top-2 w-px h-full bg-slate-200" />
              
              <div className="flex flex-col md:flex-row gap-3 md:gap-12">
                <div className="md:w-36 shrink-0 pt-1 relative">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute -left-[1.85rem] top-2.5 w-3 h-3 rounded-full bg-white border-2 border-slate-400 md:hidden" />
                  <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full inline-block border border-slate-200">2015.07 — 2021.11</span>
                </div>
                
                <div className="relative flex-1 bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors print:shadow-none print:border-slate-300">
                  <div className="hidden md:block absolute -left-[3.4rem] top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-400" />
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-1">大前端架构师 / 前端专家</h4>
                  <h5 className="text-slate-600 mb-4 font-medium">深圳点猫科技有限公司（编程猫）</h5>
                  
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li><strong className="text-slate-800">核心业务架构：</strong>全面负责编程猫核心创作工具相关产品的技术架构与研发落地，确保高并发、高稳定性的复杂系统实现。</li>
                    <li><strong className="text-slate-800">基建与规范：</strong>作为技术平台前端专家，制定并统一公司内部各研发团队的前端规范，推动底层基础设施建设。</li>
                    <li><strong className="text-slate-800">复杂系统协同：</strong>作为技术负责人统筹跨技术栈（涵盖前后端、iOS/Android、Unity等）的协同交付，保障大型项目的敏捷迭代。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Experience */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2"><FolderGit2 className="w-4 h-4"/> 核心项目经验</h3>
          
          <div className="space-y-6">
            
            {/* Project 1: RustyBox */}
            <div className="glass-card p-6 md:p-8 hover:border-slate-300 transition-colors relative overflow-hidden print:shadow-none print:border-slate-300 project-block">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h4 className="text-xl font-bold text-slate-900">RustyBox 移动端 3D 引擎</h4>
                <div className="flex items-center gap-2 text-sm font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5" /> 2024.01 — 2025.10
                </div>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-sm text-slate-700 font-medium">角色：技术负责人</span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-sm text-slate-500">团队：1名移动端 + 3名前端</span>
              </div>
              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <p><strong className="text-slate-800">项目背景：</strong>为解决 Web 游戏在移动端的性能与体验瓶颈，研发类小游戏底层解决方案，使 Boxes 创作的游戏能直接输出为原生 App。</p>
                <p><strong className="text-slate-800">核心贡献：</strong>主导整体技术选型，承担核心的 Rust 与 JS 桥接层开发。攻克移动端渲染与 JS 引擎执行效率难题。</p>
                <p><strong className="text-slate-800">业务成果：</strong>成功支撑商业化产品顺利上线应用市场，验证了该技术路线的商业化可行性。</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">Rust</span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">Deno Core (V8)</span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">WGPU</span>
              </div>
            </div>

            {/* Project 2: Boxes */}
            <div className="glass-card p-6 md:p-8 hover:border-slate-300 transition-colors relative overflow-hidden print:shadow-none print:border-slate-300 project-block">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h4 className="text-xl font-bold text-slate-900">Boxes Web 3D 引擎</h4>
                <div className="flex items-center gap-2 text-sm font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5" /> 2021.11 — 2026.01
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm text-slate-700 font-medium">角色：技术团队负责人</span>
              </div>
              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <p><strong className="text-slate-800">项目背景：</strong>接手 2017 年启动的核心历史项目，在团队调整与历史技术债并存的背景下，完成稳定承接与持续演进。</p>
                <p><strong className="text-slate-800">团队重组：</strong>快速招募并组建新团队，平稳承接并推进大量积压的业务开发工作。</p>
                <p><strong className="text-slate-800">架构重构与效能提升：</strong>将基于 WebGL + React 的前后端同构项目重构为前后端分离的大仓（Monorepo）模式，<strong className="text-emerald-600">构建时间从 30 分钟骤降至 30 秒</strong>。</p>
                <p><strong className="text-slate-800">SSR 改造：</strong>重构既有构建发布链路，全面迁移至基于 NextJS 的 SSR 架构，显著降低项目运维与开发复杂度。</p>
                <p><strong className="text-slate-800">渲染底层演进：</strong>推动渲染引擎从 WebGL 向 WebGPU 升级；针对移动端性能瓶颈，将动态阴影优化为静态阴影方案，大幅提升渲染帧率。</p>
                <p><strong className="text-slate-800">AI Agent 赋能：</strong>引入大模型能力，构建基于对话的地图编辑 Agent。接入 <strong>Gemini API</strong> 与 <strong>OpenRouter</strong>，底层采用 Vercel AI SDK Core 结合 Zod 构建可靠的结构化对话流，前端基于 shadcn/ui (Radix UI + Tailwind CSS) 打造现代化交互组件，实现通过自然语言直接操作 3D 场景的创新体验。</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">NextJS</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">WebGPU</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">Gemini API</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">OpenRouter</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">Vercel AI SDK</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">shadcn/ui</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">Tailwind CSS</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">Monorepo</span>
                <span className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-md">SSR</span>
              </div>
            </div>

            {/* Project 3: SDK */}
            <div className="glass-card p-6 md:p-8 hover:border-slate-300 transition-colors relative overflow-hidden print:shadow-none print:border-slate-300 project-block">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h4 className="text-xl font-bold text-slate-900">创作工具 SDK</h4>
                <div className="flex items-center gap-2 text-sm font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5" /> 2021.08 — 2021.11
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm text-slate-700 font-medium">角色：架构设计与核心开发</span>
              </div>
              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <p><strong className="text-slate-800">项目背景：</strong>解决多款创作工具与业务侧 App 之间多对多接入带来的高耦合与维护成本痛点。</p>
                <p><strong className="text-slate-800">核心贡献：</strong>设计标准化的 SDK 接入方案。业务侧 App 仅需嵌入一个基础 SDK，即可根据场景灵活、动态加载不同的创作工具。</p>
                <p><strong className="text-slate-800">工程化实践：</strong>引入 Lerna 进行大仓（Monorepo）管理。以 Kids 业务线为切入点，逐步将所有离散的创作工具统一纳入标准 SDK 体系，极大提升了跨业务线的接入效率。</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">Lerna</span>
                <span className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">Monorepo</span>
                <span className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">SDK Architecture</span>
              </div>
            </div>

            {/* Project 4: Nemo */}
            <div className="glass-card p-6 md:p-8 hover:border-slate-300 transition-colors relative overflow-hidden print:shadow-none print:border-slate-300 project-block">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h4 className="text-xl font-bold text-slate-900">编程猫 Nemo</h4>
                <div className="flex items-center gap-2 text-sm font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5" /> 2017.11 — 2021.11
                </div>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-sm text-slate-700 font-medium">角色：项目技术负责人</span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-sm text-slate-500">团队：最高 3名前端 + 4名移动端</span>
              </div>
              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <p><strong className="text-slate-800">项目描述：</strong>移动双端图形化编程工具，支持作为独立 App 运行，或作为 SDK 嵌入业务侧 App（如探月编程）。</p>
                <p><strong className="text-slate-800">核心贡献：</strong>负责整体技术框架设计与前端核心开发。主导技术栈演进，从早期的 React Native 架构平滑迁移至 Hybrid App 方案。</p>
                <p><strong className="text-slate-800">效能优化：</strong>统一前端技术选型（与 Web 端 Kitten 保持一致），深度抽离并实现核心模块的组件化复用，大幅降低双端维护成本。</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md">Hybrid App</span>
                <span className="text-xs font-mono text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md">React Native</span>
                <span className="text-xs font-mono text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md">Cross-platform</span>
              </div>
            </div>

            {/* Project 5: 源码编辑器 */}
            <div className="glass-card p-6 md:p-8 hover:border-slate-300 transition-colors relative overflow-hidden print:shadow-none print:border-slate-300 project-block">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h4 className="text-xl font-bold text-slate-900">源码编辑器</h4>
                <div className="flex items-center gap-2 text-sm font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5" /> 2015.07 — 2021.11
                </div>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-sm text-slate-700 font-medium">角色：核心开发 → 技术负责人</span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-sm text-slate-500">团队：3-5 名前端</span>
              </div>
              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <p><strong className="text-slate-800">项目描述：</strong>公司核心的 Web 端图形化编程创作平台，支撑海量用户的在线编程创作需求。</p>
                <p><strong className="text-slate-800">核心贡献：</strong>伴随项目成长，经历多次底层重构。早期负责图形化编程、画板等核心业务模块开发；后期全面接管并主导整体架构设计。</p>
                <p><strong className="text-slate-800">技术演进：</strong>最终确立并落地基于 <code className="text-purple-700 bg-purple-50 border border-purple-100 px-1 py-0.5 rounded">TypeScript + React + Redux + Webpack + Pixi.js + Blockly + Fabric.js</code> 的现代化、高性能前端架构体系。</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md">TypeScript</span>
                <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md">React + Redux</span>
                <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md">Pixi.js</span>
                <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md">Blockly</span>
                <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md">Fabric.js</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400 print:hidden">
          <p>© {new Date().getFullYear()} Greendou (He Zhuning). Online resume.</p>
          <p>Built with React, Tailwind CSS and Motion.</p>
        </footer>

      </main>
    </div>
  );
}
