import { Metadata } from "next";
import { Calculator, Users, Percent, Calendar } from "lucide-react";
import LandCostCalculator from "@/components/LandCostCalculator";

export const metadata: Metadata = {
    title: "LandShare Pro - জমি ভাগাভাগি ক্যালকুলেটর | Smart Land Cost Calculator",
    description: "দলগত জমি ক্রয়ের জন্য স্মার্ট ক্যালকুলেটর। জমির মূল্য, ডাউন পেমেন্ট এবং কিস্তি পরিকল্পনা সহজে গণনা করুন। Smart calculator for group land purchases with cost, down payment, and installment planning.",
    keywords: [
        "LandShare Pro",
        "জমি ভাগাভাগি ক্যালকুলেটর",
        "land cost calculator",
        "জমি ক্রয়",
        "land purchase",
        "ডাউন পেমেন্ট",
        "down payment",
        "কিস্তি পরিকল্পনা",
        "installment plan",
        "দলগত ক্রয়",
        "group purchase",
        "জমির মূল্য",
        "land price",
        "কাঠা",
        "katha",
        "বাংলাদেশ",
        "bangladesh",
        "real estate",
        "property calculator",
        "land sharing",
        "জমি ভাগাভাগি"
    ],
    openGraph: {
        title: "LandShare Pro - Smart Land Cost Calculator",
        description: "দলগত ক্রয়ের জন্য স্মার্ট জমি ক্যালকুলেটর। সহজ এবং নির্ভুল গণনা।",
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'LandShare Pro - Smart Land Cost Calculator',
            },
        ],
    },
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <Calculator className="h-8 w-8 sm:h-12 sm:w-12" />
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                                LandShare
                            </h1>
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">
                            জমি ভাগাভাগি ক্যালকুলেটর
                        </h2>
                        <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                            দলগত জমি ক্রয়ের জন্য স্মার্ট ক্যালকুলেটর। মূল্য, ডাউন পেমেন্ট এবং কিস্তি পরিকল্পনা সহজে গণনা করুন।
                        </p>
                    </div>
                </div>
            </div>

            {/* Calculator Section - Moved to top */}
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                        ক্যালকুলেটর ব্যবহার করুন
                    </h3>
                </div>

                <LandCostCalculator />
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                        কেন LandShare ব্যবহার করবেন?
                    </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                    <div className="text-center">
                        <div className="bg-blue-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                            <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                        </div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">স্মার্ট গণনা</h4>
                    </div>

                    <div className="text-center">
                        <div className="bg-green-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                        </div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">দলগত ভাগাভাগি</h4>
                    </div>

                    <div className="text-center">
                        <div className="bg-purple-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                            <Percent className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                        </div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">সহজ পেমেন্ট</h4>
                    </div>

                    <div className="text-center">
                        <div className="bg-orange-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                            <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                        </div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">কিস্তি পরিকল্পনা</h4>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            LandShare
                        </h4>
                        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                            দলগত জমি ক্রয়ের জন্য স্মার্ট এবং নির্ভুল ক্যালকুলেটর
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
