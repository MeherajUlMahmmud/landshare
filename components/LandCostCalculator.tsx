"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Users, MapPin, DollarSign, Percent, CreditCard, Calendar } from "lucide-react";
import Script from "next/script";

export default function LandCostCalculator() {
    const [formData, setFormData] = useState({
        totalPeople: "",
        katha: "",
        pricePerKatha: "",
        downPaymentPercentage: "",
        installmentYears: "4"
    });

    const [results, setResults] = useState({
        totalPrice: 0,
        downPayment: 0,
        remainingAmount: 0,
        monthlyInstallment: 0,
        totalInstallments: 0
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const calculateCosts = () => {
        const totalPeople = parseFloat(formData.totalPeople) || 0;
        const katha = parseFloat(formData.katha) || 0;
        const pricePerKathaInLakhs = parseFloat(formData.pricePerKatha) || 0;
        const pricePerKatha = pricePerKathaInLakhs * 100000; // Convert lakhs to actual amount
        const downPaymentPercentage = parseFloat(formData.downPaymentPercentage) || 0;
        const installmentYears = parseFloat(formData.installmentYears) || 4;

        const totalPrice = katha * pricePerKatha;
        const downPayment = (totalPrice * downPaymentPercentage) / 100;
        const remainingAmount = totalPrice - downPayment;
        const totalInstallments = installmentYears * 12;
        const monthlyInstallment = remainingAmount / totalInstallments;

        setResults({
            totalPrice,
            downPayment,
            remainingAmount,
            monthlyInstallment,
            totalInstallments
        });
    };

    // Calculate automatically when form data changes
    useEffect(() => {
        calculateCosts();
    }, [formData]);

    const resetForm = () => {
        setFormData({
            totalPeople: "",
            katha: "",
            pricePerKatha: "",
            downPaymentPercentage: "",
            installmentYears: "4"
        });
        setResults({
            totalPrice: 0,
            downPayment: 0,
            remainingAmount: 0,
            monthlyInstallment: 0,
            totalInstallments: 0
        });
    };

    // Format number to show in lakhs
    const formatInLakhs = (amount: number) => {
        const lakhs = amount / 100000;
        return lakhs.toLocaleString('en-IN', { maximumFractionDigits: 2 });
    };

    return (
        <>
            {/* Additional Structured Data for Page-specific SEO */}
            <Script
                id="page-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "জমির মূল্য ক্যালকুলেটর - Land Cost Calculator",
                        "description": "দলগত ক্রয়ের জন্য জমির মূল্য, ডাউন পেমেন্ট এবং কিস্তি পরিকল্পনা গণনা করুন।",
                        "url": "https://land-cost-calculator.vercel.app",
                        "mainEntity": {
                            "@type": "WebApplication",
                            "name": "জমির মূল্য ক্যালকুলেটর",
                            "applicationCategory": "FinanceApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "BDT"
                            }
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "হোম",
                                    "item": "https://land-cost-calculator.vercel.app"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "জমির মূল্য ক্যালকুলেটর",
                                    "item": "https://land-cost-calculator.vercel.app"
                                }
                            ]
                        },
                        "potentialAction": {
                            "@type": "UseAction",
                            "target": "https://land-cost-calculator.vercel.app",
                            "description": "জমির মূল্য ক্যালকুলেটর ব্যবহার করুন"
                        }
                    })
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Input Form */}
                <Card className="shadow-lg">
                    <CardHeader className="">
                        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                            জমির বিবরণ
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                            জমির বিবরণ এবং পেমেন্টের তথ্য প্রবেশ করান
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="totalPeople" className="flex items-center gap-2 text-sm sm:text-base">
                                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                                    মোট লোকসংখ্যা
                                </Label>
                                <Input
                                    id="totalPeople"
                                    type="number"
                                    placeholder="একসাথে কিনতে চাওয়া লোকের সংখ্যা"
                                    value={formData.totalPeople}
                                    onChange={(e) => handleInputChange("totalPeople", e.target.value)}
                                    className="h-12 sm:h-10 text-base"
                                    inputMode="numeric"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="katha" className="flex items-center gap-2 text-sm sm:text-base">
                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                                    জমির আকার (কাঠা)
                                </Label>
                                <Input
                                    id="katha"
                                    type="number"
                                    step="0.01"
                                    placeholder="জমির মোট কাঠা"
                                    value={formData.katha}
                                    onChange={(e) => handleInputChange("katha", e.target.value)}
                                    className="h-12 sm:h-10 text-base"
                                    inputMode="decimal"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pricePerKatha" className="flex items-center gap-2 text-sm sm:text-base">
                                    <DollarSign className="h-3 w-3 sm:h-4 sm:w-4" />
                                    প্রতি কাঠার মূল্য (লক্ষ)
                                </Label>
                                <Input
                                    id="pricePerKatha"
                                    type="number"
                                    step="0.01"
                                    placeholder="প্রতি কাঠার মূল্য লক্ষে"
                                    value={formData.pricePerKatha}
                                    onChange={(e) => handleInputChange("pricePerKatha", e.target.value)}
                                    className="h-12 sm:h-10 text-base"
                                    inputMode="decimal"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="downPaymentPercentage" className="flex items-center gap-2 text-sm sm:text-base">
                                    <Percent className="h-3 w-3 sm:h-4 sm:w-4" />
                                    ডাউন পেমেন্ট শতকরা হার
                                </Label>
                                <Input
                                    id="downPaymentPercentage"
                                    type="number"
                                    step="0.01"
                                    placeholder="ডাউন পেমেন্ট শতকরা হার"
                                    value={formData.downPaymentPercentage}
                                    onChange={(e) => handleInputChange("downPaymentPercentage", e.target.value)}
                                    className="h-12 sm:h-10 text-base"
                                    inputMode="decimal"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="installmentYears" className="flex items-center gap-2 text-sm sm:text-base">
                                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                    কিস্তির সময়কাল (বছর)
                                </Label>
                                <Input
                                    id="installmentYears"
                                    type="number"
                                    step="0.5"
                                    placeholder="কিস্তির সময়কাল বছর"
                                    value={formData.installmentYears}
                                    onChange={(e) => handleInputChange("installmentYears", e.target.value)}
                                    className="h-12 sm:h-10 text-base"
                                    inputMode="decimal"
                                />
                            </div>

                            <Button type="button" variant="outline" onClick={resetForm} className="w-full h-12 sm:h-10 text-base">
                                রিসেট
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Results */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Total Price */}
                    <Card className="shadow-lg">
                        <CardHeader className="">
                            <CardTitle className="flex items-center gap-2 text-green-600 text-base sm:text-lg">
                                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
                                মোট জমির মূল্য
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl sm:text-3xl font-bold text-green-600">
                                ৳{results.totalPrice.toLocaleString()}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                {formData.katha || 0} কাঠার মোট মূল্য প্রতি কাঠা ৳{formData.pricePerKatha || 0} লক্ষ হারে
                            </p>
                        </CardContent>
                    </Card>

                    {/* Down Payment */}
                    <Card className="shadow-lg">
                        <CardHeader className="">
                            <CardTitle className="flex items-center gap-2 text-blue-600 text-base sm:text-lg">
                                <Percent className="h-4 w-4 sm:h-5 sm:w-5" />
                                ডাউন পেমেন্ট
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl sm:text-2xl font-bold text-blue-600">
                                ৳{results.downPayment.toLocaleString()}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                মোট মূল্যের {formData.downPaymentPercentage || 0}%
                            </p>
                        </CardContent>
                    </Card>

                    {/* Remaining Amount */}
                    <Card className="shadow-lg">
                        <CardHeader className="">
                            <CardTitle className="flex items-center gap-2 text-orange-600 text-base sm:text-lg">
                                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                                বাকি টাকা
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl sm:text-2xl font-bold text-orange-600">
                                ৳{results.remainingAmount.toLocaleString()}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                কিস্তিতে পরিশোধ করতে হবে
                            </p>
                        </CardContent>
                    </Card>

                    {/* Monthly Installment */}
                    <Card className="shadow-lg">
                        <CardHeader className="">
                            <CardTitle className="flex items-center gap-2 text-purple-600 text-base sm:text-lg">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                                মাসিক কিস্তি
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl sm:text-2xl font-bold text-purple-600">
                                ৳{results.monthlyInstallment.toLocaleString()}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                {results.totalInstallments} কিস্তি {formData.installmentYears || 4} বছরে
                            </p>
                            {formData.totalPeople && (
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    প্রতি ব্যক্তি: ৳{(results.monthlyInstallment / parseFloat(formData.totalPeople)).toLocaleString()}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Summary */}
            {results.totalPrice > 0 && (
                <Card className="mt-6 sm:mt-8 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardHeader className="">
                        <CardTitle className="text-center text-base sm:text-lg">পেমেন্ট সারসংক্ষেপ</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                            <div>
                                <div className="text-sm sm:text-lg font-semibold text-gray-700">মোট খরচ</div>
                                <div className="text-lg sm:text-2xl font-bold text-green-600">৳{results.totalPrice.toLocaleString()}</div>
                            </div>
                            <div>
                                <div className="text-sm sm:text-lg font-semibold text-gray-700">ডাউন পেমেন্ট</div>
                                <div className="text-lg sm:text-2xl font-bold text-blue-600">৳{results.downPayment.toLocaleString()}</div>
                            </div>
                            <div>
                                <div className="text-sm sm:text-lg font-semibold text-gray-700">মাসিক পেমেন্ট</div>
                                <div className="text-lg sm:text-2xl font-bold text-purple-600">৳{results.monthlyInstallment.toLocaleString()}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    );
} 